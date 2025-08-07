<?php if (have_rows('latest_news', 'option')) : ?>
    <div class="container slide-left-section">
        <section class="latestNews">
            <div class="row align-items-center">
                <div class="col-lg-2">
                    <h2 class="sec-tit">
                        <?php _e('أحدث الأخبار','saint') ?>
                    </h2>
                </div>
                <div class="col-lg-10">
                    <div class="marquee-container">
                        <div class="marquee-wrapper">
                            <?php while (have_rows('latest_news', 'option')) : the_row(); ?>
                                <div class="marquee-content">
                                    <?php the_sub_field('news_text'); ?>
                                </div>
                            <?php endwhile; ?>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
<?php endif; ?>