import {FeatureSchemaDefinition} from '../../schemaTypes/types'

export const homePage: FeatureSchemaDefinition = {
  variants: {
    card: [
      {
        title: 'Default',
        value: 'default',
      },
      {
        title: 'Banner Carousel Item',
        value: 'bannerCarouselItem',
      },
      {
        title: 'Brand Carousel Item',
        value: 'brandCarouselItem',
      },
      {
        title: 'Product Card',
        value: 'productCard',
      },
      {
        title: 'Grey Background Item',
        value: 'greyBackgroundItem',
      },
      {
        title: 'Carousel Card',
        value: 'carouselCard',
      },
      {
        title: 'Video Card',
        value: 'videoCard',
      },
      {
        title: 'Card With Icons',
        value: 'iconsCard',
      },
      {
        title: 'Card With Product Details',
        value: 'productDetailsCard',
      },
      {title:'Mobile Product Card Slider',
        value: 'mobileProductCard'
      }
    ],
    group: [
      {
        title: 'Default',
        value: 'default',
      },
      {
        title: 'Banner Image Carousel',
        value: 'bannerImageCarousel',
      },
      {
        title: 'Brand Image Carousel',
        value: 'brandImageCarousel',
      },
      {
        title: 'Product Group',
        value: 'productGroup',
      },
      {
        title: 'Grey Background Group',
        value: 'greyBackgroundGroup',
      },
      {
        title: 'Offer Carousel Group',
        value: 'offerCarouselGroup',
      },
      {
        title: 'Group With Column',
        value: 'groupWithColumn',
      },
      {
        title: 'Group With Split Groups Component',
        value: 'splitGroupComponent',
      },
      {
        title: 'Deal Tracker Group',
        value: 'dealTrackGroup',
      },
      {
        title: 'Group With Half Width Slider',
        value: 'groupWithHalfWidthSlider',
      },
    ],
  },
}
