module.exports = {
  name: 'get-set-algo',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/get-set-algo',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
