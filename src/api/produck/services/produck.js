'use strict';

/**
 * produck service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::produck.produck');
