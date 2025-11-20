import React, { useState } from "react"
import { useNavigate, useLocation, Link } from "react-router-dom"
import { useAuth } from "../context/AuthContext";

export default function LoginPage() {
    const navigate = useNavigate()
    const location = useLocation()
    const { login } = useAuth();

    const redirect = new URLSearchParams(location.search).get("redirect") || "/"

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)

    const handleLogin = async (e) => {
        e.preventDefault()
        setError(null)
        setIsPending(true)

        try {
               login("data.user");

                navigate(redirect)
            // const res = await fetch("/api/login", {
            //     method: "POST",
            //     headers: { "Content-Type": "application/json" },
            //     body: JSON.stringify({ email, password }),
            // })

            // const data = await res.json()

            // if (!res.ok) {
            //     setError(data.error || "Invalid login credentials")
            // } else {
            //     login(data.user);

            //     navigate(redirect)
            // }
        } catch (err) {
            setError("Something went wrong.")
        }

        setIsPending(false)
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-neutral-900 to-neutral-800 px-4">
            <div className="w-full max-w-md">

                {/* Logo */}
                <div className="text-center mb-8">
                    <img src="https://layerx3d.in/layerx-logo.svg" className="h-16 w-auto mx-auto" alt="logo" />
                </div>

                {/* Login Card */}
                <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-2xl">
                    <h1 className="text-3xl font-bold text-white mb-2">Welcome Back</h1>
                    <p className="text-neutral-400 mb-6">Sign in to your account</p>

                    <form onSubmit={handleLogin} className="space-y-4">

                        {/* Email */}
                        <div>
                            <label className="text-white block mb-1">Email</label>
                            <input
                                type="email"
                                className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/20 text-white placeholder:text-neutral-500"
                                placeholder="you@example.com"
                                required
                                disabled={isPending}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label className="text-white block mb-1">Password</label>
                            <input
                                type="password"
                                className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/20 text-white placeholder:text-neutral-500"
                                placeholder="••••••••"
                                required
                                disabled={isPending}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        {/* Error */}
                        {error && (
                            <div className="bg-red-500/10 border border-red-500/20 p-3 rounded-lg">
                                <p className="text-red-400 text-sm">{error}</p>
                            </div>
                        )}

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={isPending}
                            className="w-full py-2 rounded-lg bg-orange-600 hover:bg-orange-700 text-white disabled:opacity-50"
                        >
                            {isPending ? "Signing in..." : "Sign In"}
                        </button>
                    </form>

                    {/* Signup link */}
                    <div className="mt-6 text-center text-neutral-400 text-sm">
                        Don't have an account?
                        <Link to="/signup" className="text-orange-500 hover:text-orange-400 ml-1">
                            Sign up
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
