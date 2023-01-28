import damusIcon from '../assets/damus.png';
import irisIcon from '../assets/iris.png';
import coracleIcon from '../assets/coracle.png';
import snortIcon from '../assets/snort.png';
import nostrConsoleIcon from '../assets/nostr-console.png';
import blockcoreNotesIcon from '../assets/blockcore.png';

export const NOSTR_CLIENTS = [
    {
        title: 'Damus',
        description: 'Nostr client for iOS featuring friendly and modern UX flows.',
        image: damusIcon,
        url: 'https://testflight.apple.com/join/CLwjLxWl',
        buttonText: 'Download',
        tags: [
            'Beginner',
            'iOS',
            'BTC Tips',
            'Profiles',
            'Friendly UX',
            'Popular'
        ],
    },
    {
        title: 'Snort Social',
        description: 'Web-based Nostr client with dark mode and friendly UX flows.',
        image: snortIcon,
        url: 'https://snort.social',
        buttonText: 'Open',
        tags: [
            'Web',
            'Profiles',
            'Friendly UX'
        ],
    },
    {
        title: 'Iris',
        description: 'Web-based Nostr client for beginners.',
        image: irisIcon,
        url: 'https://iris.to',
        buttonText: 'Open',
        tags: [
            'Web',
            'Responsive UI',
            'Friendly UX',
        ],
    },
    {
        title: 'Coracle',
        description: 'Intermediate-level Web-based Nostr client',
        image: coracleIcon,
        url: 'https://coracle.social',
        buttonText: 'Open',
        tags: [
            'Web',
            'Responsive UI',
            'Good UX',
            'Customizable',
            'Intermediate'
        ],
    },
    {
        title: 'Nostr Console',
        description: 'CLI-based Nostr client for your command line.',
        image: nostrConsoleIcon,
        url: 'https://github.com/vishalxl/nostr_console',
        buttonText: 'Open',
        tags: [
            'Command Line',
            'Technical',
            'Advanced',
            'Fully Featured'
        ],
    },
    {
        title: 'Blockcore Notes',
        description: 'Simple Web-based Nostr client.',
        image: blockcoreNotesIcon,
        url: 'http://notes.blockcore.net/',
        buttonText: 'Download',
        tags: [
            'Intermediate',
            'Experimental',
        ],
    },
]