import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function SignupPage() {
  const navigate = useNavigate()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [fullName, setFullName] = useState("")
  const [phone, setPhone] = useState("")
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)
  const [confirmationMessage, setConfirmationMessage] = useState(null)

  const handleSignup = async (e) => {
    e.preventDefault()
    setError(null)
    setConfirmationMessage(null)
    setIsPending(true)

    try {
      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          password,
          fullName,
          phone,
        }),
      })

      const data = await res.json()

      if (!res.ok) {
        setError(data.error || "Something went wrong!")
      } else {
        // If email confirmation required
        if (data.requiresEmailConfirmation) {
          setSuccess(true)
          setConfirmationMessage(data.message)
        } else {
          navigate("/login")
        }
      }
    } catch (err) {
      setError("Something went wrong!")
    }

    setIsPending(false)
  }

  // If signup successful and awaiting email confirmation
  if (success && confirmationMessage) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-neutral-900 to-neutral-800 px-4">
        <div className="w-full max-w-md">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-2xl text-center">
            <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>

            <h2 className="text-2xl font-bold text-white mb-2">Check Your Email</h2>
            <p className="text-neutral-400">{confirmationMessage}</p>

            <button
              onClick={() => navigate("/login")}
              className="mt-6 px-6 py-2 rounded-lg bg-orange-600 hover:bg-orange-700 text-white"
            >
              Go to Login
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Signup Form
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-neutral-900 to-neutral-800 px-4">
      <div className="w-full max-w-md mt-20 mb-10">

        {/* Logo */}
        <div className="text-center mb-8">
          <img src="https://layerx3d.in/layerx-logo.svg" alt="Layer X" className="h-16 w-auto mx-auto" />
        </div>

        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-2xl">
          <h1 className="text-3xl font-bold text-white mb-2">Create Account</h1>
          <p className="text-neutral-400 mb-6">Join Layer X for professional 3D printing</p>

          <form onSubmit={handleSignup} className="space-y-4">

            {/* Full Name */}
            <div>
              <label className="text-white block mb-1">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                disabled={isPending}
                className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/20 text-white placeholder:text-neutral-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-white block mb-1">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isPending}
                className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/20 text-white placeholder:text-neutral-500"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="text-white block mb-1">Phone Number</label>
              <input
                type="tel"
                placeholder="+91 98765 43210"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                disabled={isPending}
                className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/20 text-white placeholder:text-neutral-500"
              />
            </div>

            {/* Password */}
            <div>
              <label className="text-white block mb-1">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
                disabled={isPending}
                className="w-full px-3 py-2 rounded-lg bg-white/5 border border-white/20 text-white placeholder:text-neutral-500"
              />
              <p className="text-xs text-neutral-500 mt-1">Must be at least 6 characters</p>
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
              {isPending ? "Creating account..." : "Create Account"}
            </button>
          </form>

          {/* Already have account? */}
          <div className="mt-6 text-center text-neutral-400 text-sm">
            Already have an account?
            <button
              onClick={() => navigate("/login")}
              className="text-orange-500 hover:text-orange-400 ml-1"
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
