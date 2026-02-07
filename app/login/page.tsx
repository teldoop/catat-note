"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await signIn("credentials", {
      username,
      password,
      redirect: false,
    });

    setLoading(false);

    if (res?.error) {
      setError("Username atau password salah");
      return;
    }

    router.push("/"); // beranda
  }

  return (
    <div className="container min-vh-100 d-flex justify-content-center align-items-center">
      <div className="col-md-4">
        <div className="card shadow-sm">
          <div className="card-body">
            <h4 className="mb-4 text-center">Login ke Catat Note</h4>

            {error && (
              <div className="alert alert-danger py-2">{error}</div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Username</label>
                <input
                  type="text"
                  className="form-control"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                  autoFocus
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary w-100"
                disabled={loading}
              >
                {loading ? "Masuk..." : "Login"}
              </button>
            </form>

            <div className="text-center mt-3">
              <small>
                Belum punya akun? <a href="/register">Register</a>
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
