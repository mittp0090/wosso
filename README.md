<!doctype html> <html lang="ko"> <head> <meta charset="utf-8" /> <meta name="viewport" content="width=device-width,initial-scale=1" /> <title>Gallery — SHIN YOUNG SOO</title> <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;700&display=swap" rel="stylesheet"> <style> :root{ --wrap-width:1100px; --gap:28px; --text:#222; --muted:#777; --btn-border:#ddd; --accent:#111; } *{box-sizing:border-box} body{ margin:0; font-family: "Noto Sans KR", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial; background:#fff; color:var(--text); -webkit-font-smoothing:antialiased; -moz-osx-font-smoothing:grayscale; }
.wrap{
  width:var(--wrap-width);
  max-width:95%;
  margin:40px auto 80px;
}

header{
  text-align:center;
  margin-bottom:18px;
}
.logo{
  font-size:20px;
  letter-spacing:4px;
  font-weight:700;
  margin-bottom:6px;
}
.sublogo{
  font-size:11px;
  color:var(--muted);
  margin-bottom:12px;
  letter-spacing:2px;
}

nav{
  text-align:center;
  margin-bottom:22px;
  border-top:1px solid #eee;
  border-bottom:1px solid #eee;
  padding:14px 0;
}
nav a{
  margin:0 12px;
  font-size:13px;
  color:var(--muted);
  text-decoration:none;
  padding:6px 2px;
  transition:color .2s ease;
}
nav a:hover, nav a.active{
  color:var(--accent);
}

.page-title{
  text-align:center;
  font-size:16px;
  font-weight:700;
  margin-bottom:30px;
  color:var(--accent);
  letter-spacing:2px;
}

.filters{
  display:flex;
  flex-wrap:wrap;
  gap:10px;
  justify-content:flex-start;
  margin:10px 0 22px;
}
.filters button{
  border:1px solid var(--btn-border);
  background:#fff;
  padding:8px 12px;
  border-radius:6px;
  cursor:pointer;
  font-size:13px;
  color:var(--text);
  transition: all .15s ease;
}
.filters button:hover{
  border-color:var(--accent);
}
.filters button.active{
  border-color:var(--accent);
  background:var(--accent);
  color:#fff;
  box-shadow:0 2px 6px rgba(0,0,0,0.06);
  transform:translateY(-1px);
}

.gallery{
  column-count:3;
  column-gap:var(--gap);
}
.gallery-link{
  text-decoration:none;
}
figure{
  break-inside:avoid;
  margin:0 0 var(--gap);
  background:#fff;
  display:block;
  cursor:pointer;
  transition:transform .2s ease;
}
.gallery-link:hover figure{
  transform:translateY(-2px);
}
figure img{
  width:100%;
  height:auto;
  display:block;
  border-radius:4px;
  background:#f5f5f5;
}
figcaption{
  text-align:center;
  font-size:12px;
  color:var(--muted);
  margin-top:8px;
  padding:0 6px 6px;
}
.placeholder{ width:100%; aspect-ratio:3/4; background:linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%); background-size:200% 100%; animation:loading 1.5s infinite; border-radius:4px; } @keyframes loading{ 0%{background-position:200% 0;} 100%{background-position:-200% 0;} }

.is-hidden{display:none !important;}

@media (max-width:1100px){
  .wrap{margin:30px auto 60px;}
}
@media (max-width:900px){
  .gallery{column-count:2;}
}
@media (max-width:600px){
  .gallery{column-count:1;}
  nav a{margin:0 8px;}
}
</style> </head> <body> <div class="wrap"> <header> <div class="logo">SHIN YOUNG SOO</div> <div class="sublogo">W E D D I N G &nbsp; S T U D I O</div> </header>
<nav aria-label="주요 메뉴">
  <a href="index.html" class="active">GALLERY</a>
  <a href="wedding-movie.html">WEDDING MOVIE</a>
  <a href="product.html">PRODUCT</a>
  <a href="question.html">QUESTION</a>
  <a href="instagram.html">INSTAGRAM</a>
  <a href="blog.html">BLOG</a>
</nav>

<div class="page-title">G A L L E R Y</div>

<section>
  <div class="filters" role="toolbar" aria-label="갤러리 필터">
    <button class="filter-btn active" data-filter="all" aria-pressed="true">전체</button>
    <button class="filter-btn" data-filter="wedding">Wedding Ceremony</button>
    <button class="filter-btn" data-filter="prewedding">PreWedding</button>
    <button class="filter-btn" data-filter="profile">Profile</button>
    <button class="filter-btn" data-filter="hanbok">Hanbok</button>
    <button class="filter-btn" data-filter="etc">etc.</button>
  </div>

  <main class="gallery" id="gallery" aria-live="polite">
    <a href="gallery-detail.html?id=1" class="gallery-link" data-category="wedding">
      <figure>
        <div class="placeholder" style="animation-delay:0s;"></div>
        <figcaption>더베이 웨딩홀</figcaption>
      </figure>
    </a>

    <a href="gallery-detail.html?id=2" class="gallery-link" data-category="wedding">
      <figure>
        <div class="placeholder" style="animation-delay:0.2s;"></div>
        <figcaption>결혼식장 드레스쇼</figcaption>
      </figure>
    </a>

    <a href="gallery-detail.html?id=3" class="gallery-link" data-category="wedding">
      <figure>
        <div class="placeholder" style="animation-delay:0.4s;"></div>
        <figcaption>웨딩 촬영 1</figcaption>
      </figure>
    </a>

    <a href="gallery-detail.html?id=4" class="gallery-link" data-category="wedding">
      <figure>
        <div class="placeholder" style="animation-delay:0.6s;"></div>
        <figcaption>웨딩 촬영 2</figcaption>
      </figure>
    </a>

    <a href="gallery-detail.html?id=5" class="gallery-link" data-category="prewedding">
      <figure>
        <div class="placeholder" style="animation-delay:0.8s;"></div>
        <figcaption>스튜디오 프리웨딩 1</figcaption>
      </figure>
    </a>

    <a href="gallery-detail.html?id=6" class="gallery-link" data-category="prewedding">
      <figure>
        <div class="placeholder" style="animation-delay:1s;"></div>
        <figcaption>야외 프리웨딩</figcaption>
      </figure>
    </a>

    <a href="gallery-detail.html?id=7" class="gallery-link" data-category="prewedding">
      <figure>
        <div class="placeholder" style="animation-delay:1.2s;"></div>
        <figcaption>스튜디오 프리웨딩 2</figcaption>
      </figure>
    </a>

    <a href="gallery-detail.html?id=8" class="gallery-link" data-category="prewedding">
      <figure>
        <div class="placeholder" style="animation-delay:1.4s;"></div>
        <figcaption>프리웨딩 촬영</figcaption>
      </figure>
    </a>

    <a href="gallery-detail.html?id=9" class="gallery-link" data-category="profile">
      <figure>
        <div class="placeholder" style="animation-delay:1.6s;"></div>
        <figcaption>프로필 사진 1</figcaption>
      </figure>
    </a>

    <a href="gallery-detail.html?id=10" class="gallery-link" data-category="profile">
      <figure>
        <div class="placeholder" style="animation-delay:1.8s;"></div>
        <figcaption>프로필 사진 2</figcaption>
      </figure>
    </a>

    <a href="gallery-detail.html?id=11" class="gallery-link" data-category="profile">
      <figure>
        <div class="placeholder" style="animation-delay:2s;"></div>
        <figcaption>프로필 촬영</figcaption>
      </figure>
    </a>

    <a href="gallery-detail.html?id=12" class="gallery-link" data-category="profile">
      <figure>
        <div class="placeholder" style="animation-delay:2.2s;"></div>
        <figcaption>프로필 사진 3</figcaption>
      </figure>
    </a>

    <a href="gallery-detail.html?id=13" class="gallery-link" data-category="hanbok">
      <figure>
        <div class="placeholder" style="animation-delay:2.4s;"></div>
        <figcaption>한복 1</figcaption>
      </figure>
    </a>

    <a href="gallery-detail.html?id=14" class="gallery-link" data-category="hanbok">
      <figure>
        <div class="placeholder" style="animation-delay:2.6s;"></div>
        <figcaption>한복 촬영</figcaption>
      </figure>
    </a>

    <a href="gallery-detail.html?id=15" class="gallery-link" data-category="hanbok">
      <figure>
        <div class="placeholder" style="animation-delay:2.8s;"></div>
        <figcaption>한복 2</figcaption>
      </figure>
    </a>

    <a href="gallery-detail.html?id=16" class="gallery-link" data-category="hanbok">
      <figure>
        <div class="placeholder" style="animation-delay:3s;"></div>
        <figcaption>한복 스튜디오</figcaption>
      </figure>
    </a>

    <a href="gallery-detail.html?id=17" class="gallery-link" data-category="etc">
      <figure>
        <div class="placeholder" style="animation-delay:3.2s;"></div>
        <figcaption>커플 촬영</figcaption>
      </figure>
    </a>

    <a href="gallery-detail.html?id=18" class="gallery-link" data-category="etc">
      <figure>
        <div class="placeholder" style="animation-delay:3.4s;"></div>
        <figcaption>스냅 촬영</figcaption>
      </figure>
    </a>

    <a href="gallery-detail.html?id=19" class="gallery-link" data-category="etc">
      <figure>
        <div class="placeholder" style="animation-delay:3.6s;"></div>
        <figcaption>가족 사진</figcaption>
      </figure>
    </a>

    <a href="gallery-detail.html?id=20" class="gallery-link" data-category="etc">
      <figure>
        <div class="placeholder" style="animation-delay:3.8s;"></div>
        <figcaption>기타 촬영</figcaption>
      </figure>
    </a>
  </main>
</section>
