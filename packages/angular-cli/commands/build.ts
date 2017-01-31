import { BuildOptions } from '../models/webpack-config';

const Command = require('../ember-cli/lib/models/command');

// defaults for BuildOptions
export const BaseBuildCommandOptions: any = [
  {
    name: 'target',
    type: String,
    default: 'development',
    aliases: ['t', { 'dev': 'development' }, { 'prod': 'production' }]
  },
  { name: 'environment', type: String, aliases: ['e'] },
  { name: 'output-path', type: 'Path', aliases: ['op'] },
  { name: 'aot', type: Boolean, default: false },
  { name: 'sourcemap', type: Boolean, aliases: ['sm'] },
  { name: 'vendor-chunk', type: Boolean, default: true, aliases: ['vc'] },
  { name: 'base-href', type: String, default: '/', aliases: ['bh'] },
  { name: 'deploy-url', type: String, aliases: ['d'] },
  { name: 'verbose', type: Boolean, default: false, aliases: ['v'] },
  { name: 'progress', type: Boolean, default: true, aliases: ['pr'] },
  { name: 'i18n-file', type: String },
  { name: 'i18n-format', type: String },
  { name: 'locale', type: String },
  { name: 'extract-css', type: Boolean, aliases: ['ec']},
  {
    name: 'output-hashing',
    type: String,
    values: ['none', 'all', 'media', 'bundles'],
    description: 'define the output filename cache-busting hashing mode',
    aliases: ['oh']
  },
];

export interface BuildTaskOptions extends BuildOptions {
  watch?: boolean;
}

const BuildCommand = Command.extend({
  name: 'build',
  description: 'Builds your app and places it into the output path (dist/ by default).',
  aliases: ['b'],

  availableOptions: BaseBuildCommandOptions.concat([
    { name: 'watch', type: Boolean, default: false, aliases: ['w'] }
  ]),

  run: function (commandOptions: BuildTaskOptions) {
    return require('./build.run').default.call(this, commandOptions);
  }
});


BuildCommand.overrideCore = true;
export default BuildCommand;
