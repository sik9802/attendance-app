# Git Bash: 저장소 폴더로 이동
cd ~/Desktop/00_firmware/attendance-app

# 1. 확인: 바뀐 파일 목록 보기 (빨간색 = 아직 안 담은 변경)
git status

# 2. 담기: 바뀐 파일 전부를 이번 커밋에 포함
git add .

# 3. 커밋: 로컬 저장소에 스냅샷 저장
git commit -m "기본 페이지 뼈대 추가 및 버튼 클릭 이벤트 연결"

# 4. 업로드: GitHub에 반영
git push