function Work(props) {
  return (
    <div id="wrapMagazine" class="wrap_magazine #my_mag" style={{ display: 'block' }}>
      <h3 class="screen_out">매거진</h3>
      <div class="list_content">
        {props.works.map(function (element, i) {
          return (
            <WorkItem
              title={element.title}
              src={element.src}
              underTitle={element.underTitle}
              contextCount={element.contextCount}
              subscribeCount={element.subscribeCount}
            />
          );
        })}
      </div>
    </div>
  );
}

function WorkItem(props) {
  return (
    <>
      <div id="loadSpinner" class="layer-more-loading" style={{ display: 'none' }}>
        <div class="loader">
          <div class="dot dot1"></div>
          <div class="dot dot2"></div>
          <div class="dot dot3"></div>
        </div>
      </div>
      <div
        class="box_content animation_up #mag_list box_content_up"
        data-tiara-action-name="작가 프로필 > 작품탭 > 리스트 클릭"
        data-tiara-action-kind="ClickContent"
        data-tiara-layer="works"
        data-tiara-id="@@tGN"
      >
        <div class="cover_book cover_book_type3">
          <a href="/magazine/dear-love">
            <div class="info_cover sanmessi">
              <strong class="tit_cover">{props.title}</strong>
            </div>
            <img src={props.src} width="158" height="114" class="img_thumb" alt="이미지정보" />
            <span class="dimmed_book_type1"></span>
            <span class="dimmed_cover"></span>
          </a>
        </div>
        <strong class="tit_content">magazine</strong>
        <a href="/magazine/dear-love" class="tit_subject">
          <span class="inner_txt">{props.underTitle}</span>
        </a>
        <dl class="list_post_info">
          <dt>
            <span class="ico_brunch_v1 ico_list">전체글갯수</span>
          </dt>
          <dd class="txt_g">
            <em>{props.contextCount}</em>
          </dd>
          <dt>
            <span class="ico_brunch_v1 ico_subscribe">구독자</span>
          </dt>
          <dd class="txt_g">{props.subscribeCount}</dd>
        </dl>
      </div>
    </>
  );
}

export { Work, WorkItem };
