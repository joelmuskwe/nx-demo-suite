module.exports = {
  name: 'dmx-auth-auth-feature-shell',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/dmx/auth/auth-feature-shell',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
