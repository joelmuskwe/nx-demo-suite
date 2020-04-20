module.exports = {
  name: 'dmx-auth-auth-data-access',
  preset: '../../../../jest.config.js',
  coverageDirectory: '../../../../coverage/libs/dmx/auth/auth-data-access',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
