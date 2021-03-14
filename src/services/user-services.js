async function getAvatar(cb) {
  const user = JSON.parse(localStorage.getItem("user"));
  const { username } = user;
  const req = await fetch(
    `http://travel-app-backend-rsschool.herokuapp.com/users/get-avatar/${username}`,
    {
      method: "GET",
    }
  );
  const res = await req.json();
  const avatarUrl = res[0].avatar;
  if(cb) {
      cb(avatarUrl)
  }
  return avatarUrl;
}

export { getAvatar };
