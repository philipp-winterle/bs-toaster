# bs-toaster

A Bootstrap 5 Toast Framework - Easy to use. No other dependencies than Bootstrap itself.

![CI Build Status](https://github.com/hummal/bs-toaster/workflows/Node.js%20CI/badge.svg?branch=master)
![GitHub release](https://img.shields.io/github/release/hummal/bs-toaster.svg?style=flat-square)
![npm](https://img.shields.io/npm/dt/bs-toaster.svg?style=flat-square&label=NPM+Downloads)
![Github Releases](https://img.shields.io/github/downloads/hummal/bs-toaster/total.svg?style=flat-square&label=Github+Downloads)

[![NPM](https://nodei.co/npm/bs-toaster.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/bs-toaster/)

> After using Bootstrap Toasts is nice but affords a lot of work to make them dynamic I created a ESM module framework for using orgininal Toasts without any additional dependecies as icons or stuff.
>
> Simple create an instance of bs-toaster and create multiple toasts without any hussle with native Bootstrap 5! :muscle:

#### Feature Facts

-   Small and clean
-   Modern browser support. No IE sorry
-   :boom: Support of custom icon markup :boom: :metal:

## Getting Started

### Supported Browsers

-   Chrome 75+
-   Firefox 78+
-   Safari 14
-   Edge 90

### Requirements

-   Bootstrap 5

### Installation

Because nodejs 10 is out of LTS we can make the use of esm modules. This package will only come as esm module.

```bash
npm i bs-toaster
```

```bash
yarn add bs-toaster
```

### Usage

#### Modul usage

To use bs-toaster as a module just import it and choose your [options](#options).

```javascript
import {
    Toaster,
    ToasterPosition,
    ToasterTimer,
    ToasterType,
} from "bs-toaster";
```

##### Initilization

```javascript
// Simple
const simpleToaster = new Toaster();

// Advanced
const advancedToaster = new Toaster({
    position: ToasterPosition.BOTTOM_END,
    type: ToasterType.DEFAULT,
    delay: 5000,
    timer: ToasterTimer.ELAPSED,
});
```

##### Basic Usage

```javascript
simpleToaster.create("Important Title", "This is an important text");
```

##### Advandced Usage

```javascript
advancedToaster.create("Important Title", "This is an important text", {
    type: ToasterType.DANGER,
    timer = ToasterTimer.COUNTDOWN,
    delay = 10000,
    animation = false,
});
```

##### Advanced - Custom Icon

If you want to have a special icon on your toast or have own styles for your types, you can simply override the icon markup. Just keep sure to insert the %TYPE% placeholder for the type to set. You can also overwrite all type contents for own added css classes.

```javascript
ToasterType.DANGER = "myDangerClass";

const advancedToaster = new Toaster({
    defaultIconMarkup: `<i class="p-2 me-2 rounded %TYPE%"></i>`,
});
```

## Options

| Property              | Values | Description                                                                                                                                                                                                                     |
| --------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **position**          | ENUM   | Can be one of the ToasterPostion values. <br /> Default: ToasterPosition.BOTTOM_END                                                                                                                                             |
| **type**              | ENUM   | Can be one of the ToasterType values. This value describes the default type when no type is given in create. <br /> Possible Values: DEFAULT, SUCCESS, DANGER, INFO, PRIMARY, WARNING, DARK <br /> Default: ToasterType.DEFAULT |
| **timer**             | ENUM   | Can be on of the ToasterTimer values. Describes how the time will be displayed on the right side of the toast. <br />Default: ToasterTimer.ELAPSED                                                                              |
| **delay**             | Number | Describes after how many milliseconds the toast should disappear. <br />Default: 5000                                                                                                                                           |
| **defaultIconMarkup** | String | If you want to change the look of the icon of the toast header you can do it here. Remember to insert the "%TYPE%" for better class control. <br /> Default: `<i class="p-2 me-2 rounded %TYPE%"></i>`                          |

## FAQ :confused:

-

## Upcoming :trumpet:

-   [ ] :star: Dark Mode

## Known Bugs :shit:

None yet

## Troubleshooting

#### Nothing yet

Some things will happen. Please write an issue if you have an idea or need some help.

## Inspiration

:star: [toaststrap](https://github.com/nawafscript/toaststrap)
:star: [BoostrapToaster](https://github.com/PeytonRG/BootstrapToaster)
