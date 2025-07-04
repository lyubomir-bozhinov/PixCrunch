import { h, Component } from 'preact';

import { linkRef } from 'shared/prerendered-app/util';
import '../../custom-els/loading-spinner';
import logoWebp from 'url:./imgs/logo.webp';
import logoPng from 'url:./imgs/logo.png';
import githubLogo from 'url:./imgs/github-logo.svg';
import bmcLogo from 'url:./imgs/buy-me-a-coffee-logo.svg';
import largePhoto from 'url:./imgs/demos/demo-large-photo.jpg';
import artwork from 'url:./imgs/demos/demo-artwork.jpg';
import deviceScreen from 'url:./imgs/demos/demo-device-screen.png';
import largePhotoIcon from 'url:./imgs/demos/icon-demo-large-photo.jpg';
import artworkIcon from 'url:./imgs/demos/icon-demo-artwork.jpg';
import deviceScreenIcon from 'url:./imgs/demos/icon-demo-device-screen.jpg';
import * as style from './style.css';
import type SnackBarElement from 'shared/custom-els/snack-bar';
import 'shared/custom-els/snack-bar';

const demos = [
  {
    description: 'Large photo',
    size: '2.8MB',
    filename: 'photo.jpg',
    url: largePhoto,
    iconUrl: largePhotoIcon,
  },
  {
    description: 'Artwork',
    size: '2.9MB',
    filename: 'art.jpg',
    url: artwork,
    iconUrl: artworkIcon,
  },
  {
    description: 'Device screen',
    size: '1.6MB',
    filename: 'pixel3.png',
    url: deviceScreen,
    iconUrl: deviceScreenIcon,
  },
] as const;

const supportsClipboardAPI =
  !__PRERENDER__ && navigator.clipboard && navigator.clipboard.read;

async function getImageClipboardItem(
  items: ClipboardItem[],
): Promise<undefined | Blob> {
  for (const item of items) {
    const type = item.types.find((type) => type.startsWith('image/'));
    if (type) return item.getType(type);
  }
}

interface Props {
  onFile?: (file: File) => void;
  showSnack?: SnackBarElement['showSnackbar'];
}
interface State {
  fetchingDemoIndex?: number;
  beforeInstallEvent?: BeforeInstallPromptEvent;
}

export default class Intro extends Component<Props, State> {
  state: State = {};
  private fileInput?: HTMLInputElement;
  private installingViaButton = false;

  componentDidMount() {
    window.addEventListener(
      'beforeinstallprompt',
      this.onBeforeInstallPromptEvent,
    );
    window.addEventListener('appinstalled', this.onAppInstalled);
  }

  componentWillUnmount() {
    window.removeEventListener(
      'beforeinstallprompt',
      this.onBeforeInstallPromptEvent,
    );
    window.removeEventListener('appinstalled', this.onAppInstalled);
  }

  private onFileChange = (event: Event): void => {
    const fileInput = event.target as HTMLInputElement;
    const file = fileInput.files && fileInput.files[0];
    if (!file) return;
    this.fileInput!.value = '';
    this.props.onFile!(file);
  };

  private onOpenClick = () => {
    this.fileInput!.click();
  };

  private onDemoClick = async (index: number, event: Event) => {
    try {
      this.setState({ fetchingDemoIndex: index });
      const demo = demos[index];
      const blob = await fetch(demo.url).then((r) => r.blob());
      const file = new File([blob], demo.filename, { type: blob.type });
      this.props.onFile!(file);
    } catch (err) {
      this.setState({ fetchingDemoIndex: undefined });
      this.props.showSnack!("Couldn't fetch demo image");
    }
  };

  private onBeforeInstallPromptEvent = (event: BeforeInstallPromptEvent) => {
    event.preventDefault();
    this.setState({ beforeInstallEvent: event });
  };

  private onInstallClick = async (event: Event) => {
    const beforeInstallEvent = this.state.beforeInstallEvent;
    if (!beforeInstallEvent) return;

    this.installingViaButton = true;
    beforeInstallEvent.prompt();
    const { outcome } = await beforeInstallEvent.userChoice;

    if (outcome === 'dismissed') {
      this.installingViaButton = false;
    }
  };

  private onAppInstalled = () => {
    this.setState({ beforeInstallEvent: undefined });
    if (document.hidden) return;
    this.installingViaButton = false;
  };

  private onPasteClick = async () => {
    let clipboardItems: ClipboardItem[];

    try {
      clipboardItems = await navigator.clipboard.read();
    } catch (err) {
      this.props.showSnack!(`No permission to access clipboard`);
      return;
    }

    const blob = await getImageClipboardItem(clipboardItems);

    if (!blob) {
      this.props.showSnack!(`No image found in the clipboard`);
      return;
    }

    this.props.onFile!(new File([blob], 'image.unknown'));
  };

  render({}: Props, { fetchingDemoIndex, beforeInstallEvent }: State) {
    return (
      <div class={style.intro}>
        <input
          class={style.hide}
          ref={linkRef(this, 'fileInput')}
          type="file"
          onChange={this.onFileChange}
        />
        {beforeInstallEvent && (
          <button class={style.installBtn} onClick={this.onInstallClick}>
            Install
          </button>
        )}
        <section class={style.hero}>
          <div class={style.heroContent}>
            <div class={style.logoContainer}>
              <picture>
                <source srcset={logoWebp} type="image/webp" />
                <img class={style.logo} src={logoPng} alt="PixCrunch" />
              </picture>
            </div>
            <h1 class={style.headline}>
              Blazing-Fast, Privacy-Focused Image Compression for Every Device
            </h1>
            <p class={style.subHeadline}>
              Optimize Images Instantly. Offline. Private. Reduce file size,
              boost website speed, all without uploading your data.
            </p>
            <div class={style.ctaZone}>
              <button class={style.selectImageBtn} onClick={this.onOpenClick}>
                Select Image
              </button>
              <span class={style.orText}>OR</span>
              <div class={style.dragDropText}>Drag & Drop Your Image Here</div>
              {supportsClipboardAPI && (
                <button class={style.pasteBtn} onClick={this.onPasteClick}>
                  Paste from Clipboard
                </button>
              )}
            </div>
          </div>
        </section>

        <section class={style.benefits}>
          <div class={style.benefitsGrid}>
            <div class={style.benefitItem}>
              <div class={style.benefitIcon}>⚡</div>
              <h3>Speed</h3>
              <p>Smaller images mean faster load times for your website.</p>
            </div>
            <div class={style.benefitItem}>
              <div class={style.benefitIcon}>✨</div>
              <h3>Quality</h3>
              <p>
                Maintain high visual clarity while significantly reducing file
                size.
              </p>
            </div>
            <div class={style.benefitItem}>
              <div class={style.benefitIcon}>🔒</div>
              <h3>Privacy</h3>
              <p>
                Your images never leave your device, all processing is local.
              </p>
            </div>
            <div class={style.benefitItem}>
              <div class={style.benefitIcon}>✈️</div>
              <h3>Offline</h3>
              <p>
                Optimize images anytime, anywhere, even without an internet
                connection.
              </p>
            </div>
          </div>
        </section>

        <section class={style.demoSection}>
          <h2>Try It Out With Examples</h2>
          <ul class={style.demos}>
            {demos.map((demo, i) => (
              <li>
                <button
                  class="unbutton"
                  onClick={(event) => this.onDemoClick(i, event)}
                >
                  <div class={style.demoContainer}>
                    <div class={style.demoIconContainer}>
                      <img
                        class={style.demoIcon}
                        src={demo.iconUrl}
                        alt={demo.description}
                      />
                      {fetchingDemoIndex === i && (
                        <div class={style.demoLoader}>
                          <loading-spinner />
                        </div>
                      )}
                    </div>
                    <div class={style.demoSize}>{demo.size}</div>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </section>

        <footer class={style.footer}>
          <div class={style.footerContent}>
            <a
              class={style.footerLinkWithLogo}
              href="https://github.com/lyubomir-bozhinov/PixCrunch"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={githubLogo} alt="GitHub Logo" width="20" height="20" />
              Source on Github
            </a>
            <a
              class={style.footerLinkWithLogo}
              href="https://buymeacoffee.com/lboz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={bmcLogo}
                alt="Buy Me a Coffee Logo"
                width="20"
                height="20"
              />
              Buy Me a Coffee
            </a>
          </div>
        </footer>
      </div>
    );
  }
}
