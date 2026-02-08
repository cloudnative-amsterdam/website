exports.createPages = require('./gatsby/create-pages');
exports.onCreateNode = require('./gatsby/on-create-node');
exports.createSchemaCustomization = require('./gatsby/create-schema-customization');

exports.createPages = async (options) => {
  const { actions } = options;
  const { createRedirect } = actions;

  // External redirect for tickets
  createRedirect({
    fromPath: '/tickets',
    toPath: 'https://cloudnative.amsterdam',
    isPermanent: true,
    redirectInBrowser: true,
  });

  // External redirect for CFP
  createRedirect({
    fromPath: '/cfp',
    toPath: 'https://cloudnative.amsterdam',
    isPermanent: true,
    redirectInBrowser: true,
  });

  // External redirect for sponsor
  createRedirect({
    fromPath: '/sponsor',
    toPath: 'https://cloudnative.amsterdam',
    isPermanent: true,
    redirectInBrowser: true,
  });

  // Call the original createPages
  await require('./gatsby/create-pages')(options);
};
