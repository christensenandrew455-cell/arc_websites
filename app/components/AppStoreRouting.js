"use client";

import { useEffect } from "react";
import { androidDownloadUrl, iosDownloadUrl } from "../productLinks";

function mobileStoreTarget() {
  if (typeof navigator === "undefined") return "";
  const userAgent = String(navigator.userAgent || "");
  const isAndroid = /Android/i.test(userAgent);
  const isAppleMobile = /iPhone|iPad|iPod/i.test(userAgent)
    || (/Macintosh/i.test(userAgent) && Number(navigator.maxTouchPoints || 0) > 1);
  if (isAndroid) return androidDownloadUrl;
  if (isAppleMobile) return iosDownloadUrl;
  return "";
}

export function GetAppLink({ children = "Get the App", className = "", ...props }) {
  function openStore(event) {
    const target = mobileStoreTarget();
    if (!target) return;
    event.preventDefault();
    window.location.assign(target);
  }

  return <a href="/download" onClick={openStore} className={className} {...props}>{children}</a>;
}

export function AppStoreRedirect() {
  useEffect(() => {
    const target = mobileStoreTarget();
    if (target) window.location.replace(target);
  }, []);

  return <p className="mt-3 text-sm font-bold text-orange-700">Choose the version for your device below.</p>;
}
