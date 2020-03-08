module.exports = {
  name: 'animation-elements',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/animation-elements',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
