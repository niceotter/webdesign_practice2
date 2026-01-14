"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    vw: any;
    vmap: any;
  }
}

export default function VWorldMap() {
  useEffect(() => {
    // 이미 로드돼 있으면 중복 방지
    if (document.getElementById("vworld-script")) {
      initMap();
      return;
    }

    // 1️⃣ script 태그 생성 (HTML과 동일)
    const script = document.createElement("script");
    script.id = "vworld-script";
    script.type = "text/javascript";
    script.src =
      "https://map.vworld.kr/js/vworldMapInit.js.do?version=2.0&apiKey=DA227030-273E-37F4-A3DD-73D741FD3A5B&domain=localhost";

    // ⭐ async / defer 절대 쓰지 않음
    document.body.appendChild(script);

    // 2️⃣ script가 DOM에 붙은 직후, 폴링으로 준비 대기
    const timer = setInterval(() => {
      if (
        window.vw &&
        window.vw.ol3 &&
        window.vw.ol3.Map &&
        window.vw.ol3.BasemapType
      ) {
        clearInterval(timer);
        initMap();
      }
    }, 50);

    function initMap() {
      // HTML 예제와 100% 동일
      window.vw.ol3.MapOptions = {
        basemapType: window.vw.ol3.BasemapType.GRAPHIC,
        controlDensity: window.vw.ol3.DensityType.EMPTY,
        interactionDensity: window.vw.ol3.DensityType.BASIC,
        controlsAutoArrange: true,
        homePosition: window.vw.ol3.CameraPosition,
        initPosition: window.vw.ol3.CameraPosition,
      };

      window.vmap = new window.vw.ol3.Map(
        "vmap",
        window.vw.ol3.MapOptions
      );
    }

    return () => {
      // cleanup 안 함 (VWorld는 전역 유지가 안전)
    };
  }, []);

  return (
    <div
      id="vmap"
      style={{
        width: "100%",
        height: "1070px",
        position: "relative",
      }}
    />
  );
}
