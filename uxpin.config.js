module.exports = {
  name: 'Shopify Polaris',
  components: {
    categories: [
      {
        name: 'General',
        include: [
          'src/components/Badge/Badge.tsx',
          'src/components/Button/Button.tsx',
        ]
      },
    ]
  }
};
