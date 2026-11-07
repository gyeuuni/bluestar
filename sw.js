// 파란별: 홈 화면 앱 설치용 서비스 워커 (오프라인 저장은 하지 않아요)
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => e.waitUntil(self.clients.claim()));
