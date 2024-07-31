const MiniProfile = (props) => {
    const { user, toRead, reading, read, loadProfile } = props;
    // toRead, reading and read are states containing array of book details object
    const numOfToRead = toRead.length;
    const numOfReading = reading.length;
    const numOfRead = read.length;

    return (
        <div>
            <img className="profile_picture" src={user.profile_photo} alt={user.username} />
            <span>{user.username}</span>          
            <div>
                <div>
                    <span>Following</span>
                    <span>{user.following}</span>    
                </div>
                <div>
                    <span>Followers</span>
                    <span>{user.followers}</span>   
                </div>
            </div>
            <div>
                <div>
                    <span>To Read</span>
                    <span>{numOfToRead}</span>    
                </div>
                <div>
                    <span>Reading</span>
                    <span>{numOfReading}</span>    
                </div>
                <div>
                    <span>Read</span>
                    <span>{numOfRead}</span>    
                </div>
            </div>
            {/* loadProfile is a function which will render ProfilePage in App.jsx */}
            <span onClick={() => loadProfile()}>Your Profile</span>
        </div>
    );
};

export default MiniProfile;