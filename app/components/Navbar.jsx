"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  const login = () => {
    const fakeUser = { name: "Guest User" };
    localStorage.setItem("user", JSON.stringify(fakeUser));
    setUser(fakeUser);
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <nav
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        padding: "12px 20px",
        background: "#222",
        color: "white",
        marginBottom: 20,
      }}
    >
      <h2>Fake Store</h2>

      <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
        <a href="/" style={{ color: "white", textDecoration: "none" }}>
          Home
        </a>
        <a href="/favorites" style={{ color: "white", textDecoration: "none" }}>
          Favorites
        </a>

        {user ? (
          <>
            <span>Hi, {user.name}</span>
            <button
              onClick={logout}
              style={{ padding: "6px 12px", cursor: "pointer" }}
            >
              Logout
            </button>
          </>
        ) : (
          <button
            onClick={login}
            style={{ padding: "6px 12px", cursor: "pointer" }}
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
}
