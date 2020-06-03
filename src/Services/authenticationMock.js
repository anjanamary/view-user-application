const users = [
  { username: "admin", password: "password" },
  { username: "testuser", password: "password" }
];

export function getUser(user){
    return users.find(u=>u.username===user);
}