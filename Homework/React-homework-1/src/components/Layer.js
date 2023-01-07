function Layer() {
  return (
    <div>
      <div class="dimmed_layer"></div>
      <div class="dimmed_guide_layer"></div>
      <div class="guide_layer">
        <div class="layer_content">
          <button type="button" class="btn_more" title="자세히 보기"></button>
          <button type="button" class="btn_edit" title="프로필 편집하기"></button>
        </div>
        <div class="layer_foot">
          <a href="javascript:;" class="btn_close" data-action="close">
            <span class="img_brunch">닫기</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Layer;
