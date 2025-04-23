---
layout: post
mathjax: false
comments: true
title:  "How I built my first PC"
date:   2025-04-11 
---

**DISCLAIMER**: This post was written by me and refined using AI. The information provided is accurate as of April 11, 2025. The prices and specs I chose might become outdated over time.

During my time in the US (I'll share the story of how I ended up working there for 6 months in another post), I started feeling the need for a new PC. As much as I liked my MacBook Pro M1, the lack of an NVIDIA GPU was becoming a significant limitation. So, I began considering two options: 1) Buying a very powerful laptop with a high-end NVIDIA GPU, or 2) Building a workstation to keep in a fixed location and access remotely using my laptop. I went with the second option because the cost of a laptop with a really powerful graphics card was nearly double, if not more, than what I estimated spending on building a PC. For context, I had looked at some Lenovo ThinkPad P series laptops. The least expensive model was around €1,758.01 and came equipped with an NVIDIA 500 Ada Generation GPU with 4GB.

At that point, I started researching online. Having never built a PC before, I didn't know where to start. I turned to what I find the most useful resource for this: Reddit. Thanks to Reddit, I started seeing recommended setups for AI and discovered PCPartPicker. This site is helpful both when planning a build and for getting an idea of potential future upgrades. Whenever you select a component, it automatically filters out incompatible parts. Plus, another very handy feature is that it constantly provides an estimated wattage needed to power the computer.

Now, let's dive into the different components:

- **Motherboard**. The heart of the computer. This is where all the cables and components connect. Your motherboard choice also dictates your CPU choice, as motherboards are compatible with either Intel or AMD CPUs. Another important factor is the type of RAM supported (in my case, DDR4). You also need to consider the number of PCIe x16 slots, especially if you're planning a build with dual 3090s or even quad 3090s. Typically, most boards list two PCIe x16 slots, but one often gets blocked when you install the GPU, effectively leaving only one usable slot. In these cases, you often need to opt for motherboards with 3 or 4 PCIe x16 slots.
- **CPU**. The eternal Intel vs. AMD fight. I went with an Intel Core i5-12600KF, considered one of the best CPUs of its generation. It has 10 cores running at 3.7 GHz, and the "KF" suffix means it doesn't have integrated graphics.
- **RAM**. I initially planned for 32GB of RAM, but after a friend's recommendation, I upgraded to 64GB. Before buying RAM, always double-check that it's compatible with your motherboard.
- **CPU Cooling**. There are two main types: traditional air coolers and liquid AIO (All-In-One) coolers. I opted for an air cooler. It's more budget-friendly but still effective.
- **GPU**. This is the crucial component for an AI researcher. One of the key specs to look at is VRAM. The RTX 3090 is considered one of the most powerful consumer GPUs because it boasts 24GB of VRAM, the highest for a consumer card at the time, now only surpassed by the RTX 5090, which has 32GB.
- **SSD**. It's generally recommended to get an NVMe SSD as your primary drive because it significantly speeds up operations. I chose a 1TB NVMe SSD.
- **Case**. I picked the Montech XR because I liked its aesthetics, and it supports a dual 3090 setup, just in case I want to expand my workstation down the line.
- **Power Supply Unit (PSU)**. For this, I got a 750W PSU. I made sure it was 80+ Gold certified. Being fully modular means I only need to connect the cables I actually use. This seems sufficient for my build, as the system's estimated power draw is around 638W. However, to be on the safe side, considering the potential power spikes from the RTX 3090, an 850W PSU might have been a better choice. But, I was working within a limited budget. 

Using PCPartPicker, you can also see potential future upgrades. For instance, I could eventually upgrade to an Intel i7-12700K, which is compatible with all my other components. Regarding the motherboard, CPU, RAM, and SSD, I actually bought them in the US while I was there. I ran the numbers and figured I could save some money that way. I ordered them through Amazon USA.

When it came to the GPU, I first tried looking on Amazon. What I found was that finding a high-end GPU there without paying a hefty premium was practically impossible. My budget was around €1000. So, I started monitoring the used market for RTX 3090s. Prices were hovering around 700−800 on Facebook Marketplace, which, as far as I know, is the main place to buy used hardware in the US.

On Subito.it (which I consider kind of Italy's go-to site for second-hand goods), I noticed you could find RTX 3090s for around €600, if you were quick enough to snag a deal. Of course, you need to be careful when buying online. This goes for any e-commerce platform. Always be wary of sellers asking for upfront payments or bank transfers; these are almost always scams. The only payment methods I use are PayPal "Goods & Services" or Subito's own integrated system, which works similarly and offers buyer protection against scams. Eventually, I managed to buy a Zotac RTX 3090 Trinity, complete with its box and accessories, for €560. (I was back in Italy by then, hence the price in Euros). I chose to pay an extra €30 to use PayPal Goods & Services for the added security. 


| Component    | Name                                                                     | Price (USD)  | Price (EUR)   | Notes                                  |
|:-------------|:-------------------------------------------------------------------------|--------------|---------------|----------------------------------------|
| CPU          | Intel Core i5-12600KF 3.7 GHz 10-Core Processor                          | $146.81      | -             | [Link](https://tinyurl.com/4yb9k7ac)   |
| CPU Cooler   | Thermalright Assassin Spirit 120 EVO DARK 70.4 CFM CPU Cooler            | $26.90       | –             | [Link]()                               |
| Motherboard  | MSI PRO B760M-A WIFI DDR4 Micro ATX LGA1700 Motherboard                  | $139.99      | -             | [Link](https://tinyurl.com/34tpte7r)   |
| Memory       | Corsair Vengeance LPX 64 GB (2 x 32 GB) DDR4-3600 CL18 Memory            | -            | €106.74       | -                                      |
| Storage      | TEAMGROUP MP44L 1 TB M.2-2280 PCIe 4.0 X4 NVME Solid State Drive         | $54.99       | -             | [Link](https://tinyurl.com/2trefau6)   |
| Video Card   | Zotac GAMING Trinity GeForce RTX 3090 24 GB Video Card                   | –            | €590.00       | –                                      |
| Case         | Montech XR ATX Mid Tower Case                                            | –            | €63.11        | [Link](https://www.amazon.it/dp/B0D5PHHCK5?ref=ppx_yo2ov_dt_b_fed_asin_title&th=1) |
| Power Supply | MAG A750GL PCIE5 750 W 80+ Gold Certified Fully Modular ATX Power Supply | –            | €99.99        | [Link](https://www.amazon.it/dp/B08BKPQQDD?ref=ppx_yo2ov_dt_b_fed_asin_title&th=1) |
|  **Total**   | –                                                                        | –            | **€1.237.55** | Using an approximaterate of 1 USD = 1.0245 EUR (Jan 14th) |


Other parts I bought back in Italy:



| Item          | Name                                           | Qty | Price (EUR) |
| :------------ | :---------------------------------------------------- | :-: | ----------: |
| Thermal Paste | ARCTIC MX-4 (4 g) Premium Performance Thermal Paste   |  1  |       €7.80 | 
| Case Fan      | Thermalright TL-C12C-S X3 (120mm ARGB)                |  1  |      €16.49 |
| Case Fan      | Thermalright TL-C12RB-S V2 (120mm ARGB Reverse)       |  3  |       €8.90 | 
| Fan Hub       | Thermalright Fan & ARGB Controller Hub x8 (SATA Power)|  1  |      €14.90 |                                                    |     |             |


Actually, some thermal paste came with the CPU cooler, but I ended up wasting it all. Since I'd never applied it before and wasn't sure how much would come out, I tested a bit on a piece of paper first. Then I made a rookie mistake: I applied the thermal paste but didn't mount the CPU cooler right away. When I went to do it properly, the included paste was all gone.

Why did I buy extra fans? They aren't strictly necessary; it's something I added mainly to improve GPU temperatures. You can use [this tool](https://github.com/olealgoritme/gddr6) to monitor three key GPU temperatures. These are the Junction, VRAM, and Core temps. While the Core and Junction temps always stay within safe limits, the VRAM temperature can hit around 104-105°C during intensive training tasks or when running inference on large local LLMs (like a 4-bit quantized DeepSeek-R1-Distill-Qwen-32B, which uses about 23GB of memory, nearly all the available VRAM). Because of this, I considered two potential solutions: 1) improving the case airflow, and 2) potentially replacing the GPU's thermal pads. A fan can be configured in two ways: as an intake fan (pulling air in) or as an exhaust fan (pushing air out). Any fan can do either job; you just have to flip it around to change the airflow direction. When mounting a fan at the bottom of the case, 99% of the time you want it as an intake, pushing cool air upwards towards the GPU. Having it blow downwards wouldn't make much sense.  However, what many people don't realize is that to get this upward airflow with a standard fan mounted at the bottom, you usually have to install it "upside down" meaning the side with the manufacturer's sticker (usually the back/less attractive side) faces up. This isn't great for aesthetics. That's where reverse fans come in. They are designed specifically for bottom intake mounting, pushing air up towards the GPU while keeping the "good-looking" side visible.

## The building process

In this section, I'll walk through everything I learned while putting my workstation together, along with a few tips that might come in handy.

First things first, you need to prep the motherboard. This usually starts with installing the CPU. This step really drove home how careful I needed to be throughout the entire build.I had quite a bit of difficulty getting the CPU into the socket. The first hurdle was figuring out why the plastic protective cover kept 'popping off' every time I tried to lower the CPU socket lever. Turns out, it's actually designed to do that: the cover comes off automatically. But at that moment, I was convinced I'd done something wrong. Another thing that worried me was the amount of force needed to lower the lever; it takes quite a bit of pressure. Even now, I still wonder if I did something wrong (laughs), but the PC works, so I guess I did it right.

Next, I installed the SSD. You unscrew a small cover (often a heatsink), slot the SSD into the M.2 slot, and secure it, usually with a little plastic rotating clip. I spent a few minutes figuring this mechanism out, but for someone with a bit more experience, it's a matter of seconds.

After the SSD, I installed the RAM. Usually, you install RAM modules in alternating slots (e.g., the 2nd and 4th slots). You need to pay attention to the orientation. There's a notch that has to line up. Start by pressing down firmly on one end, then the other, until you hear a distinct "click" and the retention clips on the sides snap into place automatically. If they don't close on their own (which can happen), you can gently push them closed manually.

The next stage is mounting the CPU cooler. In my case, it was a standard air cooler. I first installed the necessary mounting bracket over the CPU, then applied a "pea-sized" amount of thermal paste, and finally positioned the fan unit on top, securing it with the provided screws.

With that done, it was time to install the motherboard into the case. Before that, you typically pop in the I/O shield (the metal plate with cutouts for the rear ports) from the inside of the case. I'm not entirely sure I installed mine perfectly; I know in some cases it snaps firmly in place, but mine seemed more 'loosely fitted' until the motherboard held it secure. To mount the motherboard itself, you carefully align it with the standoff screws pre-installed in the case and then screw it down.

After securing the motherboard, it's time to start connecting the front panel connectors and other headers. This also took me a bit of time to figure out what went where. Here are the headers I connected:

- CPU_FAN: This is where you plug in the fan from your CPU cooler.
- SYS_FAN (System Fan): My motherboard has a couple of these. They're for connecting additional case fans. In my setup, I plugged my fan hub into one of these.
- JFP (Front Panel Connectors): This cluster of pins is where you connect the small wires from the case for things like the power button, reset button, power LED, and hard drive activity LED.
- JRGB (4-pin) & JARGB_V2 (3-pin): These headers are for connecting RGB lighting from fans. Pay close attention here: 4-pin (12V RGB) and 3-pin (5V ARGB) are not compatible and use different voltages. Plugging them in wrong can damage your LEDs.
- USB 2.0 Header: Connector for the cable running to the standard USB 2.0 ports on the front of your case.
- USB 3.x Header: Another case connector, used for the faster USB 3 Type-A or Type-C ports on the front panel.

At this point, you can install the GPU, usually in the top-most PCIe x16 slot. It's a good idea to install a GPU anti-sag bracket, especially for large, heavy cards like the 3090, to prevent it from bending over time.

Finally, connect the power supply cables. You'll need to connect the main 24-pin ATX power cable to the motherboard, the CPU power cable(s) (often an 8-pin EPS connector near the CPU socket, sometimes with an additional 4-pin), and the PCIe power cables for the GPU. My GPU power cable had a 'pigtail' connector (a main 6+2 pin connector with a second one branching off the same cable). Initially, I just plugged this single cable with its pigtail into the GPU. However, another important point: for power-hungry cards like the RTX 3090, it's strongly recommended to use two separate PCIe power cables run directly from the PSU, one for each power input socket on the GPU. Using a single cable with a pigtail for both sockets is generally discouraged as it might not deliver sufficient stable power under heavy load.

The final steps were plugging in the Ethernet cable, flipping the power switch on the back of the PSU itself, and pressing the main power button on the case. I installed Ubuntu using a USB drive that I had previously flashed with the ISO file. Before even starting the OS installation, I went into the BIOS/UEFI. There, I enabled the XMP profile (Extreme Memory Profile) for the RAM. This is crucial to make sure your RAM runs at its advertised speed, rather than a slower default setting. Also important in the BIOS: I made sure to set the system fan headers (SYS_FAN) that my case fans were connected to PWM mode (Pulse Width Modulation), as they might default to DC (Direct Current) mode. And that's it.
