require_relative "api-ranges.rb"
require "json"
require "timeout"

@failure = 0

def getFromPython(ran, count, log, total, type)
  log.puts "Making call # " << count.to_s << " of " << total.to_s
  puts "Making call # " << count.to_s << " of " << total.to_s
  begin
    Timeout::timeout(8) do
      data = `python3 pythonside2.py "#{ran[:north].to_s}" "#{ran[:south].to_s}" "#{ran[:east].to_s}" "#{ran[:west].to_s}" "#{type}"`
      datamod = data.concat("ice")
      datamod.slice! "\nice"
      return datamod
    end
  rescue Timeout::Error
    @failure += 1
    puts count.to_s << " of " << total.to_s << " timed out!"
    log.puts count.to_s << " of " << total.to_s << " timed out!"
    getFromPython(ran, count, log, total, type)
  end
end

def getFromAPI(x, y, type)
  startTime = Time.now
  filename = "./popular-times-data/" << x.to_s << y.to_s << type << "data.txt"

  puts "Writing to " << filename
  file = File.new(filename, "w")

  log = File.new("log.txt", "w")

  log.puts "Making " << type << " API calls in square " << x.to_s << ", " << y.to_s
  puts "Making " << type << "API calls in square " << x.to_s << ", " << y.to_s

  range = @ranges[x][y]

  count = 0
  array = []

  if !range.kind_of?(Array)
    log.puts "1 call to make"
    puts "1 call to make"
    fromPython = getFromPython(range, 1, log, 1, type)
    if fromPython.length > 2
      array.push(fromPython)
    end
  else
    total = get2DLength(range)
    log.puts total.to_s << " calls to make."
    puts total.to_s << " calls to make."
    range.each do |rang|
      rang.each do |ran|
        count += 1
        fromPython = getFromPython(ran, count, log, total, type)
        if fromPython.length > 2
          array.push(fromPython)
        end
      end
    end
  end

  file.puts array.to_json

  endTime = Time.now
  totalTime = endTime - startTime

  puts "Completed read in " << totalTime.to_s << " seconds"
  log.puts "Completed read in " << totalTime.to_s << " seconds"

end

# min and max are inclusive
# down then up, then, left then right
def getFromAPILarge(min_x, min_y, max_x, max_y)

  totalsquares = ((max_x - min_x + 1) * (max_y - min_y + 1))

  currentSquare = 0

  (min_x..max_x).each do |counter1|
    (min_y..max_y).each do |counter2|
      currentSquare += 1
      puts "Working on square " << currentSquare.to_s << " of " << totalsquares.to_s << "..."
      getFromAPI(counter1, counter2, "restaurant")
      getFromAPI(counter1, counter2, "bar")
      getFromAPI(counter1, counter2, "night_club")
    end
  end

end

def get2DLength(range)

  count = 0

  range.each do |rang|
    count += rang.length
  end

  return count

end

#getFromAPI(ARGV[0].to_i, ARGV[1].to_i, ARGV[2])
getFromAPILarge(ARGV[0].to_i, ARGV[1].to_i, ARGV[2].to_i, ARGV[3].to_i)