class Api::TransactionsController < PlaidController
  def create
    client = plaid_client
    item = Item.find_by_user_id(params[:user_id]);

    if Transaction.where(item_id: item)

      Transaction.where(item_id: item).destroy_all
      transaction_response = client.transactions.get(item.access_token, '2019-03-01', '2019-04-02')
      transactions = transaction_response.transactions

      while transactions.length < transaction_response['total_transactions']
        transaction_response = client.transactions.get(
                                            access_token,
                                            '2019-03-01',
                                            '2019-04-02',
                                            offset: transactions.length)
        transactions += transaction_response.transactions
      end

      for transaction in transactions do
        @transaction = Transaction.new()
        @transaction.name = transaction.name
        @transaction.amount = transaction.amount
        @transaction.date = transaction.date
        @transaction.category_id = transaction.category_id
        @transaction.item = item
        @transaction.save
      end



    end

    @trans = Transaction.where(item_id: item)

    render :json => {
      transaction: @trans
    }


  end

end
