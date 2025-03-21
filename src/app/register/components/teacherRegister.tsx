"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Navbar from "@/components/nabvar"
import Footer from "@/components/footer"

export default function TeacherRegister() {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
    specialization: "",
    languages: "",
    categories: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log(formData)
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#0f1123] font-poppins">
      <Navbar />
      <main className="flex-grow flex justify-center py-8">
        <div className="w-[1199px] p-10 relative">
          <form onSubmit={handleSubmit} className="space-y-8 max-w-[1060px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-[#C084FC] text-[36px] ml-7">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full h-[71.5px] border border-purple-600 rounded-[40px] bg-[#1a1b2e] text-white placeholder:text-[#FFFFFF] px-[30px] py-[20px]"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="lastname" className="block text-[#C084FC] text-[36px] ml-7">
                  Lastname
                </label>
                <Input
                  id="lastname"
                  name="lastname"
                  placeholder="Lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  className="w-full h-[71.5px] border border-purple-600 rounded-[40px] bg-[#1a1b2e] text-white placeholder:text-[#FFFFFF] px-[30px] py-[20px]"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-[#C084FC] text-[36px] ml-7">
                Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full h-[71.5px] border border-purple-600 rounded-[40px] bg-[#1a1b2e] text-white placeholder:text-[#FFFFFF] px-[30px] py-[20px]"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label htmlFor="password" className="block text-[#C084FC] text-[36px] ml-7">
                  Password
                </label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full h-[71.5px] border border-purple-600 rounded-[40px] bg-[#1a1b2e] text-white placeholder:text-[#FFFFFF] px-[30px] py-[20px]"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="confirmPassword" className="block text-[#C084FC] text-[36px] ml-7">
                  Confirm Password
                </label>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full h-[71.5px] border border-purple-600 rounded-[40px] bg-[#1a1b2e] text-white placeholder:text-[#FFFFFF] px-[30px] py-[20px]"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="specialization" className="block text-[#C084FC] text-[36px] ml-7">
                Specialization
              </label>
              <Input
                id="specialization"
                name="specialization"
                placeholder="e.g. Expert in Web Development, etc."
                value={formData.specialization}
                onChange={handleChange}
                className="w-full h-[71.5px] border border-purple-600 rounded-[40px] bg-[#1a1b2e] text-white placeholder:text-[#FFFFFF] px-[30px] py-[20px]"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="languages" className="block text-[#C084FC] text-[36px] ml-7">
                Languages Spoken
              </label>
              <Input
                id="languages"
                name="languages"
                placeholder="Languages"
                value={formData.languages}
                onChange={handleChange}
                className="w-full h-[71.5px] border border-purple-600 rounded-[40px] bg-[#1a1b2e] text-white placeholder:text-[#FFFFFF] px-[30px] py-[20px]"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="categories" className="block text-[#C084FC] text-[36px] ml-7">
                Teaching Categories
              </label>
              <Input
                id="categories"
                name="categories"
                placeholder="Subjects like Programming, Design, Marketing, etc."
                value={formData.categories}
                onChange={handleChange}
                className="w-full h-[71.5px] border border-purple-600 rounded-[40px] bg-[#1a1b2e] text-white placeholder:text-[#FFFFFF] px-[30px] py-[20px]"
              />
            </div>

            <div className="flex justify-end mt-8">
              <Button
                type="submit"
                className="w-[200px] h-[50px] bg-[#9333EA] hover:bg-[#7928CA] text-white rounded-3xl"
              >
                Register
              </Button>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  )
}

