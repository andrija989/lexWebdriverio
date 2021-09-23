# Automated testing with Webdriverio-v5

Run:

```
npm install
```

## For smoke testing of any env, IE needs to be configured:

- Tools > Internet Options > Security:

  - Enable Protected Mode for all zones (Internet, Local internet, Trusted sites, Restricted sites)
  - Add lexplore sites in trusted sites:
    - https://dev.lexplore.com
    - https://test.lexplore.com
    - https://demo.lexplore.com

* Tools > Internet Options > Advanced:
  - Enable 64-bit processes for Enhanced Protected mode\*

Windows icon size settings

- Windows Display Settings > Scale and Layout > 100%

#### Curent testing environment:

- Testing on https://dev.lexplore.com

```
    npm run smoke-dev
```

- Testing on https://test.lexplore.com

```
    npm run smoke-test
```

- Testing on https://demo.lexplore.com

```
    npm run smoke-demo

```

## Testing users permissions:

9 roles are being tested:

- System administrator
- Examiner
- Teacher
- Principal
- Org. overview
- Examiner external
- Examiner administrator
- Quality administrator
- User administrator

For complete role test run:


- Testing on https://dev.lexplore.com

```
    npm run permissions-dev

```

- Testing on https://test.lexplore.com

```
    npm run permissions-test

```
- Testing on https://demo.lexplore.com

```
    npm run permissions-demo

```
