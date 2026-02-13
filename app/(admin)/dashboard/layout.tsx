"use client";

import { AuthContext } from "@/app/context/AuthContext";
import { useSidebar } from "@/app/context/SidebarContext";
import AppHeader from "@/app/layout/AppHeader";
import AppSidebar from "@/app/layout/AppSidebar";
// import AppSidebar from "@/app/layout/AppSidebar";
import Backdrop from "@/app/layout/Backdrop";
import ProtectedRoute from "@/app/layout/ProtectRoute";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
// import React, { useContext, useEffect, useState } from "react";

export interface USER_DETAILS {
  username?: string
  user: string
  role: string
  loading: boolean
}

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isExpanded, isHovered, isMobileOpen } = useSidebar();
  const {username, user, role, loading } = useContext(AuthContext);
  const userDetails:USER_DETAILS = {username, user, role, loading}

  useEffect(() => {
    console.log("user, role, loading",username, user, role, loading)
  }, [username, user, role, loading]);


  // Dynamic class for main content margin based on sidebar state
  const mainContentMargin = isMobileOpen
    ? "ml-0"
    : isExpanded || isHovered
      ? "lg:ml-[250px]"
      : "lg:ml-[75px]";

  return (
    <>
      
          {/* Sidebar and Backdrop */}
          <ProtectedRoute>
            <AppSidebar userDetails={userDetails} />
            <Backdrop />
            {/* Main Content Area */}
            <div
              className={`flex-1 transition-all  duration-300 ease-in-out ${mainContentMargin}`}
            >
              {/* Header */}
              <AppHeader userDetails={userDetails} />
              {/* Page Content */}
              <div className="p-4 mx-auto max-w-(--breakpoint-2xl) md:p-6">{children}</div>
            </div>
          </ProtectedRoute>
     
 
    </>
  );
}


