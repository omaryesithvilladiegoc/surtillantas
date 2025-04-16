import NavigationBarComponent from "@/components/compound/NavigationBar";
import React from "react";

export default function ProductosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ height: "100vh", position: "relative" }}>
      <NavigationBarComponent position={false} /> {children}
    </div>
  );
}
