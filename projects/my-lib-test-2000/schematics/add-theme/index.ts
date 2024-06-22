import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { Schema as AddThemeSchema } from './schema';

export function addTheme(options: AddThemeSchema): Rule {
  return (host: Tree, context: SchematicContext) => {
    const angularJsonPath = 'angular.json';
    // this will read angular file data
    const buffer = host.read(angularJsonPath);

    if (!buffer) {
      context.logger.error('Can not find angular.json file');
      return host;
    } else {
      const angularJson = JSON.parse(buffer.toString());
      const primengStyles = [
        'node_modules/primeng/resources/themes/lara-light-blue/theme.css',
        'node_modules/primeng/resources/primeng.min.css',
      ];

      const project = angularJson.projects[options.name];
      const projectBuldOptions = project.architect.build.options;

      if (!projectBuldOptions.styles) {
        projectBuldOptions.styles = [...primengStyles];
      } else {
        projectBuldOptions.styles.push(...primengStyles);
      }

      host.overwrite(angularJsonPath, JSON.stringify(angularJson, null, 2));
      return host;
    }
  };
}
