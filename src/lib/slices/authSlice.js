// import { createSlice } from "@reduxjs/toolkit";
// import { Register } from "../../components";

// const getUserFromLocalStorage = () => {
//   const user = localStorage.getItem("currentUser");
//   return user ? JSON.parse(user) : null;
// };


// const initialState = {
//   users: JSON.parse(localStorage.getItem("users")) || [], 
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     signUp: (state, action) => {
//       state.users.push(action.payload);
//       localStorage.setItem("users", JSON.stringify(state.users));
//     },
//     login: (state, action) => {
//       const { email, password } = action.payload;
//       const user = state.users.find(
//         (u) => u.email === email && u.password === password
//       );
//       if (user) {
//         state.currentUser = user;
//         localStorage.setItem("currentUser", JSON.stringify(user));
//       } else {
//         alert("Email yoki parol noto'g'ri!");
//       }
//     },
//   },
// });

// export const { signUp, login } = authSlice.actions;
// export default authSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";

const getUserFromLocalStorage = () => {
  const user = localStorage.getItem("currentUser");
  return user ? JSON.parse(user) : null;
};

const initialState = {
  users: JSON.parse(localStorage.getItem("users")) || [],
  currentUser: getUserFromLocalStorage(),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    signUp: (state, action) => {
      state.users.push(action.payload);
      localStorage.setItem("users", JSON.stringify(state.users));
    },
    login: (state, action) => {
      const { email, password } = action.payload;
      const user = state.users.find(
        (u) => u.email === email && u.password === password
      );
      if (user) {
        state.currentUser = user;
        localStorage.setItem("currentUser", JSON.stringify(user));
      } else {
        alert("Email yoki parol noto'g'ri!");
      }
    },
  },
});

export const { signUp, login } = authSlice.actions;
export default authSlice.reducer;
