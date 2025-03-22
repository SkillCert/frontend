"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { toast } from "sonner";

export default function PasswordSettings() {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      toast.error("New passwords don't match!");
      return;
    }

    if (newPassword.length < 8) {
      toast.error("Password must be at least 8 characters long!");
      return;
    }

    toast.success("Password changed successfully!");
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="min-h-screen bg-gray-900 px-4">
      <div className="max-w-screen-xl mx-auto flex gap-6">
        <Card className="w-[288px] h-[600px] my-8 bg-[#1f2937] border-[#2a2d3a] pt-4">
          <div className="flex flex-col items-center mx-3 mb-6">
            <div className="w-[140px] h-[140px] rounded-full bg-[#ffffff] mb-3 flex items-center justify-center"></div>
            <h2 className="text-[20px] w-full text-center pb-3 font-medium text-purple-600 border-b-2 border-transparent hover:border-purple-600">
              User name
            </h2>
          </div>
          <nav className="space-y-2 mx-3">
            {["My Profile", "Password", "Settings", "Settings"].map(
              (item, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  className="w-full pb-2 text-[18px] text-purple-600 border-b-2 border-transparent hover:border-purple-600 hover:text-purple-600 hover:bg-[#1f2937] rounded-none"
                >
                  {item}
                </Button>
              )
            )}
          </nav>
        </Card>

        <Card className="flex-1 bg-gray-900 border-gray-900 pb-8">
          <div className="max-w-[1000px]">
            <h1 className="text-[48px] font-medium text-purple-500 mb-6 flex justify-center items-center gap-2">
              Password
            </h1>
            <Separator className="mt-8 mb-6 bg-purple-500" />

            <form
              onSubmit={handleSubmit}
              className="space-y-6 m-auto max-w-[485px]"
            >
              {[
                {
                  label: "Enter current password",
                  value: currentPassword,
                  setValue: setCurrentPassword,
                  placeholder: "Current password",
                },
                {
                  label: "Enter new password",
                  value: newPassword,
                  setValue: setNewPassword,
                  placeholder: "New password",
                },
                {
                  label: "Re-type new password",
                  value: confirmPassword,
                  setValue: setConfirmPassword,
                  placeholder: "Confirm new password",
                },
              ].map((field, index) => (
                <div key={index} className="space-y-5 text-center">
                  <label className="text-[24px] text-purple-500">
                    {field.label}
                  </label>
                  <Input
                    type="password"
                    value={field.value}
                    onChange={(e) => field.setValue(e.target.value)}
                    className="bg-gray-800 text-white placeholder-white max-w-[385px] rounded-full h-[51px] m-auto border-[1px] border-purple-600 focus-visible:ring-purple-500"
                    placeholder={field.placeholder}
                    required
                  />
                </div>
              ))}

              <div className="flex justify-end pr-[53px]">
                <button
                  type="submit"
                  className="bg-purple-600 text-[16px] text-white px-[40px] py-2 rounded-full hover:bg-violet-700 transition"
                >
                  Change
                </button>
              </div>
            </form>
          </div>
        </Card>
      </div>
    </div>
  );
}
