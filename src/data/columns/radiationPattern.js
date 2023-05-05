const radiationPattern = {
  "Asus RT-AC88U":
    "https://kmpic.asus.com/images/2016/09/19/0dae179e-d071-40db-990c-024f826808c8.jpg",
  "TP-Link Archer C9":
    "https://static-community.tp-link.com/other/28/4/2019/52d668dbe0044b3c832781c3ebf7e56b.jpg",
  "Linksys WRT3200ACM":
    "https://downloads.linksys.com/downloads/image/SF138847-001_EN_v1.PNG",
  "Netgear Orbi RBK50":
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Q9tan1meWMugiMr_o3kLhAHaG_%26pid%3DApi&f=1&ipt=fc106d35b6b24e5bdbaa43e493440cfa7bc18280fe7ce111d3be0bf1ca4f6f2f&ipo=images",
  "AmpliFi HD":
    "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.mpantenna.com%2Fwp-content%2Fuploads%2F2015%2F02%2FFIGURE-3.png&f=1&nofb=1&ipt=a855eabf244a2b0dbad3be5b4689dc0211a87deda43b37fbf63f68046ed0b9d3&ipo=images",
  "ASUS ROG Rapture GT-AX11000":
    "https://help.ui.com/hc/article_attachments/115022437547/image11.png",
  "NETGEAR Nighthawk X10":
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.downloads.netgear.com%2Ffiles%2Fanswer_media%2Fimages%2F24210%2F2.png&f=1&nofb=1&ipt=c39ec7bc288e4bd26c52a912cc18a51a2dc93bf4f5a40c97d5ebac0c19293543&ipo=images",
  "AsusRT AX88U":
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.rSZuezo_JJMp6LMvxvYLpwHaGC%26pid%3DApi&f=1&ipt=e95ce83b8ee72f11a9eace030952c7c0fdb5596616e766156a3fb71f507d75cd&ipo=images",
  "Linksys WRT32X":
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.qNdabdLZGuD82U9kgPmL6wHaHD%26pid%3DApi&f=1&ipt=b4c601b11556d4f628a14803af3c59b6bae3304f060e48d8ca14953d59b59fde&ipo=images",
  "TP Link Archer A7":
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic-community.tp-link.com%2Fother%2F28%2F4%2F2019%2F52d668dbe0044b3c832781c3ebf7e56b.jpg&f=1&nofb=1&ipt=b251bd14904efd052d72b096ec88310fdcd61c14d9ec238ad850154ff4d19daf&ipo=images",
  "Google Nest WiFi":
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.mpantenna.com%2Fwp-content%2Fuploads%2Felementor%2Fthumbs%2Fomni-antenna-pattern-cut-ogodzf6o35ds3p1yjy9d0ls52plgku7y6oe7lapv9k.png&f=1&nofb=1&ipt=7a7390fab9c199fdb037d84e3567f7c4ad3311c50372024155222cbe5f9c0109&ipo=images",
  "Ubiquiti UniFi Dream Machine":
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhelp.ui.com%2Fhc%2Farticle_attachments%2F115014650108%2FUAP-AC-LR_5.80GHz.jpg&f=1&nofb=1&ipt=146334e7e71e65609ef521aec84268cf1a7de56cb88a403e5c57f5284196161a&ipo=images",
  "AmpliFi Instant Router":
    "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.mpantenna.com%2Fwp-content%2Fuploads%2F2015%2F02%2FFIGURE-3.png&f=1&nofb=1&ipt=a855eabf244a2b0dbad3be5b4689dc0211a87deda43b37fbf63f68046ed0b9d3&ipo=images",
  "ASUS AC2900":
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.stack.imgur.com%2FeEP3V.jpg&f=1&nofb=1&ipt=fac3c915fde7fd509053d76f62c4b2dfb9172dca9e36e8933d53eb1536863a79&ipo=images",
  "TP-Link Archer C7":
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic-community.tp-link.com%2Fother%2F13%2F8%2F2021%2F61ddc863531b434b95d956a72823f19e.png&f=1&nofb=1&ipt=3e046c923bb1ab3fac07bfb3bdac4f1e0ee0d94c4a6e01dc5ad40c418f6ba23c&ipo=images",
  "D-Link DIR-882":
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.mpantenna.com%2Fwp-content%2Fuploads%2F2015%2F02%2F08-ANT-0874_EL.jpg&f=1&nofb=1&ipt=d7753bba17de5af94ba276cfb0e5d13bdc2c7a04a8b6f442e34ab66ea910ddea&ipo=images",
  "TP-Link Deco M9 Plus":
    "https://static-community.tp-link.com/other/28/4/2019/5e4e854f38c54085b2830cd10f35b303.jpg",
  "Netgear Nighthawk AX12":
    "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.manualsdir.com%2Fmanuals%2F283128%2F2%2Fantenex-ys8963-page2.png&f=1&nofb=1&ipt=0504d385203fd4e16fbc21eccfa34761ca1cb9619bfe3135fc6f47ddd4f88cf5&ipo=images",
  "Cisco RV260W":
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.cisco.com%2Fc%2Fdam%2Fen%2Fus%2Ftd%2Fi%2F400001-500000%2F410001-420000%2F416001-417000%2F416181.png&f=1&nofb=1&ipt=46097dc3beb93977c1d7874b8f38456bd142e373672c800d1928047c3fdb1059&ipo=images",
  "Synology RT2600ac 1":
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F1142%2F1404%2Ffiles%2FweBoost_Home_Panel_Antenna_Radiation_Patterns_700-960_MHz.png&f=1&nofb=1&ipt=f5535540876ddd2359924055559aecf70a6dd0b94e5f2f6452e16573807222d5&ipo=images",
  "Zyxel Armor Z2":
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fus.v-cdn.net%2F6029482%2Fuploads%2Feditor%2F2i%2F5gtc9qgopcn7.png&f=1&nofb=1&ipt=6dce7f467d73d6b6da67d4cd51637df523c65b953fe5f45eddadbcdd1d409d7f&ipo=images",
  "Belkin AC1900":
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Q9tan1meWMugiMr_o3kLhAHaG_%26pid%3DApi&f=1&ipt=fc106d35b6b24e5bdbaa43e493440cfa7bc18280fe7ce111d3be0bf1ca4f6f2f&ipo=images",
  "Tenda AC18":
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.stack.imgur.com%2FI8EfA.gif&f=1&nofb=1&ipt=c171bd1987f8fe319a2abe197af19e949ec3d1826af95403a73ee9c5d5f42d4b&ipo=images",
  "Huawei WS5200":
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fforum.huawei.com%2Fenterprise%2Fen%2Fdata%2Fimage%2Fsupport%2Fa287ae9d138444b4ba585a3a6f2f665a.png&f=1&nofb=1&ipt=46310c3b592f74b3713437141f0b36aeefb61144e0d586a9861f0dd28dff9554&ipo=images",
  "Xiaomi Mi Router 4A":
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fengibex.com%2Fwp-content%2Fuploads%2F2020%2F07%2FRadiation-pattern-of-a-dipole-antenna.-Antenna-is-oriented-vertically-along-Z-axis.png&f=1&nofb=1&ipt=60629f146162e9a31130c9191d27485096ceab8e25b1388195970003cf79d369&ipo=images",
  "Synology RT2600ac 2":
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.comsol.com%2Fstories%2F2020%2F90061%2Fradiation-pattern-antenna-gain.jpg&f=1&nofb=1&ipt=30df9e64d2bd8b00097981b0604f4081a59070d550485ca689415ec98e646207&ipo=images",
  "AVM FRITZ!Box 7590":
    "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.raymaps.com%2Fwp-content%2Fuploads%2F2011%2F10%2Fradiation_pattern1.jpg&f=1&nofb=1&ipt=dcc2ebd8b47a31f3dec86010fe921787c93eebb79ce2d91a53378148a2785828&ipo=images",
  "DrayTek Vigor 2926":
    "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.astrosurf.com%2Fluxorion%2FRadio%2Fyagi--6ele-radiation-pattern.gif&f=1&nofb=1&ipt=57766493b6af0e7f116cdda2a8de3f220085e4cf83e9f752967c242f43f01365&ipo=images",
  "Fortinet FortiGate 60E":
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.mpantenna.com%2Fwp-content%2Fuploads%2F2015%2F02%2F08-ANT-0874_EL.jpg&f=1&nofb=1&ipt=d7753bba17de5af94ba276cfb0e5d13bdc2c7a04a8b6f442e34ab66ea910ddea&ipo=images",
  "TP-Link Archer C4000":
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic-community.tp-link.com%2Fother%2F13%2F8%2F2021%2F61ddc863531b434b95d956a72823f19e.png&f=1&nofb=1&ipt=3e046c923bb1ab3fac07bfb3bdac4f1e0ee0d94c4a6e01dc5ad40c418f6ba23c&ipo=images",
  "Cisco RV340W":
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.cisco.com%2Fc%2Fdam%2Fen%2Fus%2Ftd%2Fi%2F400001-500000%2F450001-460000%2F453001-454000%2F453004.jpg&f=1&nofb=1&ipt=3fa33b22bf73a5ab1812d9b4fbf9b2f437f53ada8cf9def205c9abb33560ddf7&ipo=images",
  "D-Link DSR-1000AC":
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.kZnt7AguvGpNXxHLoXe66wHaE5%26pid%3DApi&f=1&ipt=f9ce61efc7851b45f6a7036f02a725e4afdbd5d3a0cdecc1bdb4ba042b906c39&ipo=images",
  "Meraki MX68CW":
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdocumentation.meraki.com%2F%40api%2Fdeki%2Ffiles%2F15569%2Fclipboard_e8c85cdec651a21125e372b26832796ff.png%3Frevision%3D1&f=1&nofb=1&ipt=0dd3b8ff57778075acba804263858c1129e8b79f44e76c425970ca51d28d5d0f&ipo=images",
  "TP-Link Archer C5400X":
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.XD_NTjoqidxv8k-32lyPMAHaFq%26pid%3DApi&f=1&ipt=dfa1702089841d3756950f4939a40dcf7f39a35dbe47206b74f5673dabb48676&ipo=images",
  "Cisco Meraki MR36":
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fdocumentation.meraki.com%2F%40api%2Fdeki%2Ffiles%2F7752%2Fclipboard_e0d73319a375018e6fba1b9da8debe5ec.png%3Frevision%3D1%26size%3Dbestfit%26width%3D566%26height%3D285&f=1&nofb=1&ipt=98fd8c8be3b47a91c6bd4b1b0a903a9cc5521d111c54993ced655e30448538a7&ipo=images",
  "Juniper SRX300":
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.juniper.net%2Ftechpubs%2Fimages%2Fg060043.gif&f=1&nofb=1&ipt=47220982877bd24990de46a2458ee620b611776bb7d1a89bf17649d546833e68&ipo=images",
  "Cisco RV340":
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.g5XUKpevS7D32Vqwgf-ROwHaDb%26pid%3DApi&f=1&ipt=8ba60b4934e6e7fa8b16555a1157d1fea1f317a4ca2fde7c03c048329fd207c2&ipo=images",
  "Huawei B535-932":
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fapprize.best%2Fnetwork%2Fccna%2Fccna.files%2Fimage113.jpg&f=1&nofb=1&ipt=45a44f844ea485c4ce57bcb0242d92611eae149a6d5bcb1d09609575b51d5e53&ipo=images",
  "TP-Link Deco X60":
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic-community.tp-link.com%2Fother%2F13%2F8%2F2021%2F61ddc863531b434b95d956a72823f19e.png&f=1&nofb=1&ipt=3e046c923bb1ab3fac07bfb3bdac4f1e0ee0d94c4a6e01dc5ad40c418f6ba23c&ipo=images",
  "Juniper SRX320":
    "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.mpantenna.com%2Fwp-content%2Fuploads%2F2015%2F02%2FFIGURE-3.png&f=1&nofb=1&ipt=a855eabf244a2b0dbad3be5b4689dc0211a87deda43b37fbf63f68046ed0b9d3&ipo=images",
  "D-Link DIR-2660":
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Q9tan1meWMugiMr_o3kLhAHaG_%26pid%3DApi&f=1&ipt=fc106d35b6b24e5bdbaa43e493440cfa7bc18280fe7ce111d3be0bf1ca4f6f2f&ipo=images",
  "Huawei AR160":
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fforum.huawei.com%2Fenterprise%2Fen%2Fdata%2Fimage%2Fsupport%2F45928872765d496c9446bc61f397809a.png&f=1&nofb=1&ipt=749efd5cd5d20153a678e29d5bedf060f149dc81b3a7c6a38bd20c7988a9849b&ipo=images",
  "TP-Link TL-WR902AC":
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.linkdataguard.com%2Fimages%2FWireless%2FAntennas%2FTL-ANT2412D%2FRadiation-Patterns.jpg&f=1&nofb=1&ipt=baa421d74b7031c1ef6a7011818c4e4faff259f02e2cac5b381a3557e7a8851d&ipo=images",
  "TP-Link Archer AX73":
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fhelp.ubnt.com%2Fhc%2Farticle_attachments%2F115022437547%2Fimage11.png&f=1&nofb=1&ipt=ce3c83096d1d202b2f43df95935e240162690f02cc9bdf2ce2b32f46f68e4dc9&ipo=images",
  "Huawei AX3 Pro":
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fforum.huawei.com%2Fenterprise%2Fen%2Fdata%2Fimage%2Fsupport%2F4b20f66703924349bfe02b2a2e8a7ab4.png&f=1&nofb=1&ipt=072173746b47485492ded24249801626ad3a9d9552ddb5874c02249aa9aa8320&ipo=images",
  "Cisco ISR 1100":
    "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.cisco.com%2Fc%2Fdam%2Fen%2Fus%2Ftd%2Fi%2F400001-500000%2F410001-420000%2F414001-415000%2F414692.jpg&f=1&nofb=1&ipt=b5b9ae397f09181053310d14c67de8f73a465c4ab7ebdd37fa5754287614d6e5&ipo=images",
  "D-Link DAP-2230":
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.stack.imgur.com%2FI8EfA.gif&f=1&nofb=1&ipt=c171bd1987f8fe319a2abe197af19e949ec3d1826af95403a73ee9c5d5f42d4b&ipo=images",
  "TP-Link Archer C24":
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.mpantenna.com%2Fwp-content%2Fuploads%2F2015%2F02%2F08-ANT-0874_EL.jpg&f=1&nofb=1&ipt=d7753bba17de5af94ba276cfb0e5d13bdc2c7a04a8b6f442e34ab66ea910ddea&ipo=images",
  "Huawei WiFi AX3 Quad-core":
    "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.mpantenna.com%2Fwp-content%2Fuploads%2F2015%2F02%2FFIGURE-3.png&f=1&nofb=1&ipt=a855eabf244a2b0dbad3be5b4689dc0211a87deda43b37fbf63f68046ed0b9d3&ipo=images",
  "Juniper SRX340":
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.TNf9fJJ4g5L_32l-YupjUgHaMr%26pid%3DApi&f=1&ipt=a39877d64e57d5c64ccca94e44ba21e5c5c794ab6aacca3df263bc3c2861bb33&ipo=images",
  "Netgear Nighthawk RAX80":
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.Q9tan1meWMugiMr_o3kLhAHaG_%26pid%3DApi&f=1&ipt=fc106d35b6b24e5bdbaa43e493440cfa7bc18280fe7ce111d3be0bf1ca4f6f2f&ipo=images",
  "ASUS RT-AX92U":
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.I2I2_FVOcrrHE02XhdOjjgHaHa%26pid%3DApi&f=1&ipt=0d6e23cbf42a2ecceb3defc241292ac7bc3ffcb5213453702e0a11907d596ec8&ipo=images",
  "D-Link DIR-3060":
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.mpantenna.com%2Fwp-content%2Fuploads%2Felementor%2Fthumbs%2Fomni-antenna-pattern-cut-ogodzf6o35ds3p1yjy9d0ls52plgku7y6oe7lapv9k.png&f=1&nofb=1&ipt=7a7390fab9c199fdb037d84e3567f7c4ad3311c50372024155222cbe5f9c0109&ipo=images",
  "Netgear RAX43":
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.comsol.com%2Fstories%2F2020%2F90061%2Fradiation-pattern-antenna-gain.jpg&f=1&nofb=1&ipt=30df9e64d2bd8b00097981b0604f4081a59070d550485ca689415ec98e646207&ipo=images",
  "ASUS RT-AX86U":
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.rSZuezo_JJMp6LMvxvYLpwHaGC%26pid%3DApi&f=1&ipt=e95ce83b8ee72f11a9eace030952c7c0fdb5596616e766156a3fb71f507d75cd&ipo=images",
  "D-Link DIR-X5460":
    "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.mpantenna.com%2Fwp-content%2Fuploads%2F2015%2F02%2FFIGURE-3.png&f=1&nofb=1&ipt=a855eabf244a2b0dbad3be5b4689dc0211a87deda43b37fbf63f68046ed0b9d3&ipo=images",
  "Huawei WiFi AX3 Dual-Core":
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.tgRCrlwGRtt509p2CCn_lQHaDl%26pid%3DApi&f=1&ipt=d77167dc4ffc8d0cd395b0db1aa2d88803883985479cf2507a24a58f4073e026&ipo=images",
  "TP-Link Deco X20":
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic-community.tp-link.com%2Fother%2F13%2F8%2F2021%2F61ddc863531b434b95d956a72823f19e.png&f=1&nofb=1&ipt=3e046c923bb1ab3fac07bfb3bdac4f1e0ee0d94c4a6e01dc5ad40c418f6ba23c&ipo=images",
  "Cisco RV160W":
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.cisco.com%2Fc%2Fdam%2Fen%2Fus%2Ftd%2Fi%2F200001-300000%2F250001-260000%2F252001-253000%2F252617.tif%2F_jcr_content%2Frenditions%2F252617.jpg&f=1&nofb=1&ipt=aecf2e2090a5ee0a81804ea1651f72c2d531a5ca280e29ce6a75b4cb1821ab0c&ipo=images",
  "D-Link DIR-X1860":
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fai2-s2-public.s3.amazonaws.com%2Ffigures%2F2017-08-08%2Fe24fef52fd9769fa040b302ec5e8a314cdc8c648%2F6-Figure3-1.png&f=1&nofb=1&ipt=ed79f0eb822f1166d310782bc932ef40111f04a18ea114ce2f65ddbd7fbb23a9&ipo=images",
  "Linksys E9450":
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.stack.imgur.com%2FeEP3V.jpg&f=1&nofb=1&ipt=fac3c915fde7fd509053d76f62c4b2dfb9172dca9e36e8933d53eb1536863a79&ipo=images",
};

export default radiationPattern;
