export const useFooter = () => {
  const year = new Date().getFullYear();

  const menus = [
    { label: 'Beranda', to: '/' },
    { label: 'Tentang', to: 'tentang' },
    { label: 'Struktur Organisasi', to: 'tentang#struktur-organisasi', isHash: true },
  ];

  const socialMedia = [
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/HMJTIUINAM',
      icon: 'facebook.svg',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/hmjti_uinam/',
      icon: 'instagram.svg',
    },
    {
      name: 'TikTok',
      url: 'https://www.tiktok.com/@hmjti_uinam',
      icon: 'tiktok.svg',
      width: '16px',
    },
    {
      name: 'YouTube',
      url: 'https://youtube.com/@hmjtiuinam',
      icon: 'youtube.svg',
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/68872866875',
      icon: 'whatsapp.svg',
    },
  ];

  const contactInfo = [
    {
      type: 'Telepon',
      value: '+62 887 2866 875',
      href: 'https://wa.me/68872866875',
      icon: 'telephone.svg',
    },
    {
      type: 'Email',
      value: 'hmj.ti@uin-alauddin.ac.id',
      href: 'mailto:hmj.ti@uin-alauddin.ac.id',
      icon: 'email.svg',
    },
    {
      type: 'Alamat',
      value: 'Samata, Romangpolong',
      icon: 'location.svg',
    },
  ];

  return {
    year,
    menus,
    socialMedia,
    contactInfo,
  };
};
