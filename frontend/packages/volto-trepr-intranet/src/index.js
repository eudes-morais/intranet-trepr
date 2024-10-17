// Views
import AreaView from './components/Views/AreaView';
import PessoaView from './components/Views/PessoaView';
// Blocks
import AreaGridItem from './components/Blocks/Grid/AreaGridItem';
/// Listing
import IconListingTemplate from './components/Blocks/Listing/IconListingTemplate';

const applyConfig = (config) => {
  config.settings = {
    ...config.settings,
    isMultilingual: false,
    supportedLanguages: ['pt-br'],
    defaultLanguage: 'pt-br',
    image_crop_aspect_ratios: [
      {
        label: '16:9',
        ratio: 16 / 9,
      },
      {
        label: '4:3',
        ratio: 4 / 3,
      },
      {
        label: '1:1',
        ratio: 1,
      },
    ],
  };

  // Views
  config.views.contentTypesViews = {
    ...config.views.contentTypesViews,
    Area: AreaView,
    Pessoa: PessoaView,
  };

  // Blocos
  /// Grid
  config.registerComponent({
    name: 'GridListingItemTemplate',
    component: AreaGridItem,
    dependencies: 'Area',
  });

  /// Listing
  //// Listing Variations
  config.blocks.blocksConfig.listing.variations = [
    ...config.blocks.blocksConfig.listing.variations,
    {
      id: 'icon-template',
      title: 'Ícones',
      template: IconListingTemplate,
    },
  ];

  /// Altera bloco mapLibreBlock
  config.blocks.blocksConfig['mapLibreBlock']['tileLayers'] = [
    {
      id: 'osm',
      name: 'OpenStreetMap',
      type: 'raster',
      urls: [
        'https://a.tile.openstreetmap.org/{z}/{x}/{y}.png',
        'https://b.tile.openstreetmap.org/{z}/{x}/{y}.png',
        'https://c.tile.openstreetmap.org/{z}/{x}/{y}.png',
      ],
      tileSize: 256,
      attribution:
        '&copy; OpenStreetMap Contributors | Kartendarstellung &copy; OpenTopoMap (CC-BY-SA)',
      maxzoom: 19,
    },
  ];
  return config;
};

export default applyConfig;
