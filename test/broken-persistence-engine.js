const { AbstractPersistenceEngine } = require('../lib/persistence');

class BrokenPersistenceEngine extends AbstractPersistenceEngine {
  events (persistenceKey, offset, limit, tags) {
    throw new Error('Elvis has left the building');
  }

  persist (persistedEvent) {}
}

module.exports.BrokenPersistenceEngine = BrokenPersistenceEngine;
