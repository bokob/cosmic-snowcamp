function Article(props) {
  return (
    <div id="wrapArticle" className="wrap_article #my_post" style={{ display: 'block' }}>
      <div className="wrap_article_list">
        <ul className="list_article list_post2 #post_list">
          {props.articles.map(function (element, i) {
            return (
              <ArticleItem
                src={element.src}
                title={element.title}
                content={element.content}
                comment={element.comment}
              />
            );
          })}
        </ul>
        <div id="loadSpinner" class="layer-more-loading">
          <div class="loader">
            <div class="dot dot1"></div>
            <div class="dot dot2"></div>
            <div class="dot dot3"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ArticleItem(props) {
  let date = new Date();
  let yyyy = String(date.getFullYear());
  let mm = String(date.getMonth() + 1);
  let dd = String(date.getDate());

  console.log(props.title);
  return (
    <li data-articleuid="5tdm_1" class="animation_up">
      <a
        href="/@javajigi/1"
        class="link_thumb #post_imageview"
        data-tiara-action-name="작가 프로필 > 글탭 > 리스트 클릭"
        data-tiara-action-kind="ClickContent"
        data-tiara-layer="articles"
        data-tiara-id="@@5tdm"
      >
        <div class="post_thumb">
          <img class="img_thumb" src={props.src} alt="이미지정보" />
        </div>
      </a>

      <a
        href="/@javajigi/1"
        class="link_post #post_imageview"
        data-tiara-action-name="작가 프로필 > 글탭 > 리스트 클릭"
        data-tiara-action-kind="ClickContent"
        data-tiara-layer="articles"
        data-tiara-id="@@5tdm"
      >
        <div class="post_title">
          <strong class="tit_subject">{props.title}</strong>
          <div class="wrap_sub_content">
            <span class="article_content">{props.content}</span>
          </div>
          <span class="post_append" style={{ whiteSpace: 'nowrap' }}>
            <span class="txt_append">댓글</span>
            <span class="num_txt">{props.comment}</span>
            <span class="ico_dot"></span>
            <span class="publish_time">{yyyy + '.' + mm + '.' + dd}</span>
          </span>
        </div>
      </a>
    </li>
  );
}

export { Article, ArticleItem };
