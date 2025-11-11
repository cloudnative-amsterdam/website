exports.createPages = require('./gatsby/create-pages');
exports.onCreateNode = require('./gatsby/on-create-node');
exports.createSchemaCustomization = require('./gatsby/create-schema-customization');

exports.createPages = async (options) => {
  const { actions } = options;
  const { createRedirect } = actions;

  // External redirect for tickets
  createRedirect({
    fromPath: '/tickets',
    toPath: 'https://shop.weeztix.com/61d9c288-cf97-48df-8bcc-ce83803a7bd6',
    isPermanent: true,
    redirectInBrowser: true,
  });

  // Call the original createPages
  await require('./gatsby/create-pages')(options);
};
