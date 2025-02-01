import Image from "next/image";
import { Timeline } from "~/components/ui/timeline";

export function TimeLineHistory() {
  const data = [
    {
      title: "Modern Period (Post-1956)",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 dark:text-neutral-200 md:text-sm">
            Tunisia gained independence from France in 1956, leading to nationwide development initiatives. In recent years, Sbiba has been recognized for its archaeological significance, with efforts to preserve and study its rich historical heritage.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/modern-sbiba.jpg"
              alt="Modern Sbiba archaeological site"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/images/archaeological-site.jpg"
              alt="Archaeological preservation efforts"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "World War II (February 1943)",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 dark:text-neutral-200 md:text-sm">
            During the Tunisian Campaign, Sbiba was near significant military engagements, including the Battle of Kasserine Pass. German forces advanced towards Sbiba Pass as part of their operations.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/kasserine-pass.jpg"
              alt="Battle of Kasserine Pass"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "7th Century AD",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 dark:text-neutral-200 md:text-sm">
            Following the Arab conquest, one of the town's churches, featuring six rows of columns, was converted into a mosque. According to local tradition, the daughter of Jerjir, the last Roman ruler defeated by the Arabs at Sbeitla, fled to the area now known as Sbiba.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/ancient-mosque.jpg"
              alt="Ancient mosque converted from church"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "411 AD",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 dark:text-neutral-200 md:text-sm">
            A notable Donatist bishop from Sbiba participated in the Council of Carthage, marking the town's significance in early Christian history.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/carthage-council.jpg"
              alt="Council of Carthage representation"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2nd Century AD",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 dark:text-neutral-200 md:text-sm">
            The village of Sufes (now Sbiba) was established as a fort during the early Roman Empire and became a colony under Emperor Marcus Aurelius (reigned 161–180 AD). Its inhabitants converted to Christianity by the 2nd century AD, approximately four centuries before the rise of Islam.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/roman-fort.jpg"
              alt="Roman fort ruins"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/images/marcus-aurelius.jpg"
              alt="Emperor Marcus Aurelius"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
