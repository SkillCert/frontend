"use client"

import type React from "react"
import { useState, useCallback } from "react"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
} from "@/components/ui/alert-dialog"
import { toast } from "react-toastify"

interface RabetIconProps {
  onConnected?: (publicKey: string | null) => void
}

declare global {
  interface Window {
    rabet?: {
      connect: () => Promise<{ publicKey: string }>
      disconnect: () => Promise<void>
    }
  }
}

const RabetIcon: React.FC<RabetIconProps> = ({ onConnected }) => {
  const [publicKey, setPublicKey] = useState<string | null>(null)
  const [isConnecting, setIsConnecting] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const [showDialog, setShowDialog] = useState<boolean>(false)
  
  const checkRabetAvailability = useCallback((): boolean => {
    return typeof window !== "undefined" && window.rabet !== undefined
  }, [])
  
  const connectWallet = async () => {
    if (!checkRabetAvailability()) {
      setError("Please install Rabet wallet")
      setShowDialog(true)
      toast.error("Rabet wallet not detected")
      return
    }

    const toastId = toast.loading("Connecting to Rabet wallet...")
    try {
      setIsConnecting(true)
      setError(null)


      const response = await window.rabet!.connect()
      setPublicKey(response.publicKey)
      onConnected?.(response.publicKey)

      toast.update(toastId, {
        render: "Successfully connected to Rabet wallet",
        type: "success",
        isLoading: false,
        autoClose: 3000,
      })
    } catch (err) {
      setError("Failed to connect to Rabet wallet")
      setShowDialog(true)
      toast.error("Failed to connect to Rabet wallet")
      toast.dismiss(toastId)
    } finally {
      setIsConnecting(false)
    }
  }

  const disconnectWallet = async () => {
    try {
      const toastId = toast.loading("Disconnecting wallet...")

      await window.rabet!.disconnect()
      setPublicKey(null)
      onConnected?.(null)

      toast.update(toastId, {
        render: "Wallet disconnected successfully",
        type: "success",
        isLoading: false,
        autoClose: 3000,
      })
    } catch (err) {
      console.error("Error disconnecting wallet:", err)
      toast.error("Failed to disconnect wallet")
    }
  }

  return (
    <div className="relative inline-block">
      <button
        onClick={publicKey ? disconnectWallet : connectWallet}
        disabled={isConnecting}
        className={`
          flex items-center justify-center
          px-4 py-2 rounded-full
          transition-all duration-200 ease-in-out
          text-sm font-medium
          shadow-md hover:shadow-lg
          ${publicKey ? "bg-blue-500 hover:bg-blue-600 text-white" : "bg-blue-500 hover:bg-blue-600 text-white"}
          ${isConnecting ? "opacity-75 cursor-not-allowed" : ""}
          focus:outline-none focus:ring-2 focus:ring-offset-2
          ${publicKey ? "focus:ring-blue-500" : "focus:ring-blue-500"}
        `}
        title={publicKey ? "Disconnect Wallet" : "Connect Rabet Wallet"}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 25 47" className="mr-2">
          <g fill="none" fillRule="nonzero">
            <path
              fill="#B8BAC4"
              d="M11.998 45.884a3.87 3.87 0 01-3.851.083L4.839 44.14c-3.39-1.876-4.609-6.155-2.716-9.546l3.21-5.71 5.002 14.943a3.79 3.79 0 001.663 2.057zM22.91 16.145l-4.263 12.722-6.65-11.817L21.314.494c.46-.823 1.711-.56 1.81.378l.724 6.748a20.198 20.198 0 01-.938 8.525z"
            ></path>
            <path
              fill="#000"
              d="M18.647 28.883l-5.004 14.944a3.86 3.86 0 01-1.645 2.074 3.745 3.745 0 01-1.646-2.074L5.349 28.883l6.649-11.816 6.649 11.816z"
            ></path>
            <path
              fill="#B8BAC4"
              d="M11.998 17.067l-6.65 11.816-4.262-12.721a19.956 19.956 0 01-.921-8.526L.889.89c.098-.94 1.35-1.203 1.81-.38l9.299 16.557zm7.159 27.073l-3.308 1.827a3.833 3.833 0 01-3.851-.083 3.793 3.793 0 001.645-2.073l5.004-14.944 3.209 5.71c1.909 3.391.691 7.687-2.7 9.563z"
            ></path>
          </g>
        </svg>
        <span>{isConnecting ? "Connecting..." : publicKey ? `${publicKey.slice(0, 6)}...${publicKey.slice(-4)}` : "Connect Wallet"}</span>
      </button>
      
      <AlertDialog open={showDialog} onOpenChange={setShowDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Connection Error</AlertDialogTitle>
            <AlertDialogDescription>
              {error}
              {!checkRabetAvailability() && (
                <div className="mt-2">
                  <a
                    href="https://rabet.io"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-600 underline"
                  >
                    Install Rabet Wallet
                  </a>
                </div>
              )}
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => setShowDialog(false)} className="bg-blue-500 hover:bg-blue-600 text-white">
              Close
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}

export default RabetIcon;