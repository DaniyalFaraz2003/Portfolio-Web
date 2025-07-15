import {
  MenuRoot,
  MenuTrigger,
  MenuPositioner,
  MenuContent,
  MenuItem,
} from "@/components/ui/menu";
import Menu from "@/components/menu";
import { Link } from "react-router";
import { twMerge } from "tailwind-merge";
import { Frame } from "@/components/ui/frame";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Chart, getColor } from "@/components/ui/chart";
import { FilePenLine, CopySlash } from "lucide-react";
import { TabsRoot, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import avatar from "@/assets/images/temper.svg";

function Main() {
  return (
    <>
      {/* HERO SECTION START */}
      <div className="flex flex-col items-center mt-36 gap-6">
        {/* Avatar with sci-fi border */}
        <div className="relative mb-4">
          <div className="w-36 h-36 rounded-full overflow-hidden flex items-center justify-center bg-gradient-to-br from-primary/30 to-accent/20">
            <Frame
              className="absolute inset-0 z-10"
              paths={JSON.parse('[{"show":true,"style":{"strokeWidth":"2","stroke":"var(--color-primary)","fill":"none"},"path":[["M","50","2"],["A","48","48","0","1","1","49.99","2"]]}]')}
              enableViewBox={true}
              viewBox="0 0 100 100"
            />
            <img
              src={avatar}
              alt="Daniyal Avatar"
              className="w-32 h-32 object-cover rounded-full z-0"
            />
          </div>
        </div>
        {/* Headline */}
        <div className="text-3xl md:text-5xl font-bold text-shadow-lg text-shadow-primary text-center max-w-2xl">
          Hi, I'm Daniyal - Full Stack Developer
        </div>
        {/* Subheading */}
        <div className="text-base md:text-xl max-w-2xl text-center opacity-80">
          Building modern, scalable web apps with a sci-fi touch. Passionate about React, Node, and cloud tech.
        </div>
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-3 mt-8">
          <a href="/resume.pdf" download>
            <Button className="w-64 sm:w-56">Download Resume</Button>
          </a>
          <a href="#contact">
            <Button variant="accent" className="w-64 sm:w-56">Contact Me</Button>
          </a>
          <a href="#projects">
            <Button variant="secondary" className="w-64 sm:w-56">View Work</Button>
          </a>
        </div>
      </div>
      {/* HERO SECTION END */}


      <div className="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-4 gap-7 w-full mt-44 px-5 2xl:px-0">
        <div
          className={twMerge([
            "h-95 relative backdrop-blur-xl sm:mt-5",
            "[--color-frame-1-stroke:var(--color-primary)]/50",
            "[--color-frame-1-fill:var(--color-primary)]/20",
            "[--color-frame-2-stroke:var(--color-accent)]",
            "[--color-frame-2-fill:var(--color-accent)]/20",
            "[--color-frame-3-stroke:var(--color-accent)]",
            "[--color-frame-3-fill:var(--color-accent)]/20",
            "[--color-frame-4-stroke:var(--color-accent)]",
            "[--color-frame-4-fill:var(--color-accent)]/20",
            "[--color-frame-5-stroke:var(--color-accent)]",
            "[--color-frame-5-fill:var(--color-accent)]/20",
            "[--color-frame-6-stroke:var(--color-accent)]",
            "[--color-frame-6-fill:var(--color-accent)]/20",
            "[--color-frame-7-stroke:var(--color-accent)]",
            "[--color-frame-7-fill:var(--color-accent)]/20",
            "[--color-frame-8-stroke:var(--color-primary)]/23",
            "[--color-frame-8-fill:transparent]",
          ])}
        >
          <Frame
            className="drop-shadow-2xl drop-shadow-primary/50 "
            paths={JSON.parse(
              '[{"show":false,"style":{"strokeWidth":"1","stroke":"var(--color-frame-1-stroke)","fill":"var(--color-frame-1-fill)"},"path":[["M","29","30"],["L","50% - 10","30"],["L","50% + 9","0% + 11.5"],["L","100% - 105","0% + 11.5"],["L","100% - 114","31"],["L","100% - 85","12"],["L","100% - 29","12"],["L","100% - 11","30"],["L","100% - 11","100% - 47"],["L","100% - 28","100% - 28"],["L","50% + 8.5","100% - 28"],["L","50% - 7.5","100% - 12"],["L","0% + 82","100% - 12"],["L","0% + 86","100% - 27"],["L","0% + 61","100% - 12"],["L","27","100% - 12"],["L","10","100% - 29"],["L","11","47"],["L","29","30"]]},{"show":true,"style":{"strokeWidth":"1","stroke":"var(--color-frame-2-stroke)","fill":"var(--color-frame-2-fill)"},"path":[["M","0% + 40","19"],["L","50% - 42","19"],["L","50% - 46","0% + 24.5"],["L","0% + 34","0% + 24.5"],["L","0% + 40","19"]]},{"show":false,"style":{"strokeWidth":"1","stroke":"var(--color-frame-3-stroke)","fill":"var(--color-frame-3-fill)"},"path":[["M","50% - 34.5","18"],["L","50% - 25","18"],["L","50% - 31","0% + 24.5"],["L","50% - 39.5","0% + 24.5"],["L","50% - 34.5","18"]]},{"show":false,"style":{"strokeWidth":"1","stroke":"var(--color-frame-4-stroke)","fill":"var(--color-frame-4-fill)"},"path":[["M","50% - 16.5","16"],["L","50% - 4","16"],["L","50% - 12","0% + 24.5"],["L","50% - 24.5","0% + 24.5"],["L","50% - 16.5","16"]]},{"show":false,"style":{"strokeWidth":"1","stroke":"var(--color-frame-5-stroke)","fill":"var(--color-frame-5-fill)"},"path":[["M","50% + 13.5","100% - 22"],["L","50% + 25","100% - 22"],["L","50% + 17","100% - 13"],["L","50% + 4.5","100% - 12.5"],["L","50% + 13.5","100% - 22"]]},{"show":false,"style":{"strokeWidth":"1","stroke":"var(--color-frame-6-stroke)","fill":"var(--color-frame-6-fill)"},"path":[["M","50% + 30.5","100% - 22"],["L","50% + 40","100% - 22"],["L","50% + 34","100% - 14.5"],["L","50% + 24.5","100% - 14.5"],["L","50% + 30.5","100% - 21"]]},{"show":false,"style":{"strokeWidth":"1","stroke":"var(--color-frame-7-stroke)","fill":"var(--color-frame-7-fill)"},"path":[["M","50% + 45.5","100% - 22"],["L","100% - 32.5","100% - 22"],["L","100% - 38.5","100% - 16.5"],["L","50% + 40.5","100% - 16.5"],["L","50% + 45.5","100% - 22"]]},{"show":false,"style":{"strokeWidth":"1","stroke":"var(--color-frame-8-stroke)","fill":"var(--color-frame-8-fill)"},"path":[["M","35","10"],["L","50% - 4","10"],["L","50% + 8","0% + 0"],["L","100% - 97","0% + 0"],["L","100% - 109","37"],["L","100% - 83","0"],["L","100% - 22","0"],["L","100% + 0","22"],["L","100% + 0","100% - 42"],["L","100% - 35","100% - 6"],["L","50% + 1.5","100% - 6"],["L","50% - 6.5","100% + 0"],["L","0% + 73.00000000000001","100% + 0"],["L","0% + 85","100% - 32"],["L","0% + 55","100% + 0"],["L","26","100% + 0"],["L","0","100% - 27"],["L","0","43"],["L","35","10"]]}]'
            )}
          />
          <div className="relative px-12 py-14 flex flex-col">
            <div className="text-3xl text-shadow-lg text-shadow-primary font-medium mb-2">
              About Me
            </div>
            <div className="opacity-70 mb-4 max-w-2xl mx-auto text-center text-lg">
              I am a passionate developer who loves building futuristic, scalable web applications. My journey started with curiosity and has grown into a mission to create impactful digital experiences. Here is a quick timeline of my growth and key milestones so far.
            </div>

          </div>
        </div>
        <div
          className={twMerge([
            "h-95 relative backdrop-blur-xl sm:-mt-8",
            "[--color-frame-1-stroke:var(--color-primary)]/50",
            "[--color-frame-1-fill:var(--color-primary)]/20",
            "[--color-frame-2-stroke:var(--color-accent)]",
            "[--color-frame-2-fill:var(--color-accent)]/20",
            "[--color-frame-3-stroke:var(--color-accent)]",
            "[--color-frame-3-fill:var(--color-accent)]/20",
            "[--color-frame-4-stroke:var(--color-accent)]",
            "[--color-frame-4-fill:var(--color-accent)]/20",
            "[--color-frame-5-stroke:var(--color-primary)]/23",
            "[--color-frame-5-fill:transparent]",
          ])}
        >
          <Frame
            className="drop-shadow-2xl drop-shadow-primary/50"
            paths={JSON.parse(
              '[{"show":true,"style":{"strokeWidth":"1","stroke":"var(--color-frame-1-stroke)","fill":"var(--color-frame-1-fill)"},"path":[["M","37","12"],["L","0% + 59","12"],["L","0% + 85","0% + 33"],["L","79","0% + 12"],["L","50% - 3","12"],["L","50% + 16","30"],["L","100% - 35","30"],["L","100% - 16","47"],["L","100% - 16","100% - 47.05882352941177%"],["L","100% - 8","100% - 44.85294117647059%"],["L","100% - 9","100% - 16.666666666666668%"],["L","100% - 17","100% - 14.705882352941176%"],["L","100% - 17","100% - 30"],["L","100% - 34","100% - 12"],["L","50% + 13","100% - 12"],["L","50% + 15","100% - 26"],["L","50% - 11","100% - 12"],["L","37","100% - 12"],["L","19","100% - 30"],["L","19","0% + 50.490196078431374%"],["L","10","0% + 48.529411764705884%"],["L","10","0% + 20.098039215686274%"],["L","0% + 19.000000000000004","0% + 18.38235294117647%"],["L","19","29"],["L","37","12"]]},{"show":true,"style":{"strokeWidth":"1","stroke":"var(--color-frame-2-stroke)","fill":"var(--color-frame-2-fill)"},"path":[["M","50% + 10","15"],["L","50% + 19","15"],["L","50% + 24","0% + 20"],["L","50% + 16","0% + 20"],["L","50% + 10","15"]]},{"show":true,"style":{"strokeWidth":"1","stroke":"var(--color-frame-3-stroke)","fill":"var(--color-frame-3-fill)"},"path":[["M","50% + 25","15"],["L","50% + 34","15"],["L","50% + 40","0% + 21"],["L","50% + 31","0% + 21"],["L","50% + 25","15"]]},{"show":true,"style":{"strokeWidth":"1","stroke":"var(--color-frame-4-stroke)","fill":"var(--color-frame-4-fill)"},"path":[["M","50% + 40","15"],["L","50% + 52","15"],["L","50% + 61","0% + 23"],["L","50% + 49","0% + 23"],["L","50% + 40","15"]]},{"show":true,"style":{"strokeWidth":"1","stroke":"var(--color-frame-5-stroke)","fill":"var(--color-frame-5-fill)"},"path":[["M","36","3"],["L","0% + 58","0"],["L","0% + 84","0% + 40"],["L","81","0% + 0"],["L","50% - 1","4"],["L","50% + 5","6"],["L","50% + 54","7"],["L","50% + 74","23"],["L","100% - 32","21"],["L","100% - 8","42"],["L","100% - 9","100% - 52.450980392156865%"],["L","100% + 0","100% - 50.245098039215684%"],["L","100% + 0","100% - 15.196078431372548%"],["L","100% - 7","100% - 13.480392156862745%"],["L","100% - 7","100% - 27"],["L","100% - 29","100% - 3"],["L","50% + 14","100% + 0"],["L","50% + 21","100% - 31"],["L","50% - 13","100% + 0"],["L","37","100% - 4"],["L","11","100% - 28"],["L","10","0% + 55.3921568627451%"],["L","0","0% + 52.94117647058823%"],["L","1","0% + 18.627450980392158%"],["L","11","0% + 16.666666666666668%"],["L","11","25"],["L","36","3"]]}]'
            )}
          />
          <div className="relative px-12 py-14">
            <div className="text-3xl text-shadow-lg text-shadow-primary font-medium">
              Timeline
            </div>
            <div className="opacity-70 mt-3 text-lg mb-12">The timeline of my progress. Showing my growth and skills earned at each stage. Hover on the points to view details</div>
            <div className="w-full h-24">
            <Chart
                config={{
                  type: "line",
                  data: {
                    labels: [
                      "2018", "2019", "2020", "2021", "2022", "2023", "2024"
                    ],
                    datasets: [
                      Object.assign({
                        label: "Growth Timeline",
                        data: [1, 2, 4, 8, 16, 32, 64],
                        backgroundColor: () => getColor("--color-primary", 0.3),
                        borderColor: () => getColor("--color-primary"),
                        borderWidth: 1,
                        pointRadius: 4, // smaller circles
                        pointHoverRadius: 6, // smaller on hover
                      }, {
                        _descriptions: [
                          "Started my coding journey.",
                          "Built my first website.",
                          "Learned React and Node.js.",
                          "Landed my first internship.",
                          "Worked on real-world SaaS projects.",
                          "Became a full stack developer.",
                          "Building futuristic UIs and mentoring others."
                        ]
                      })
                    ]
                  },
                  options: {
                    maintainAspectRatio: false,
                    plugins: {
                      legend: {
                        display: false,
                      },
                      tooltip: {
                        enabled: true,
                        displayColors: false, // Remove the square marker
                        callbacks: {
                          title: function (context) {
                            return context[0].label;
                          },
                          label: function (context) {
                            const ds = context.dataset as any;
                            const idx = context.dataIndex;
                            return ds._descriptions ? ds._descriptions[idx] : '';
                          }
                        }
                      }
                    },
                    scales: {
                      x: {
                        display: true,
                      },
                      y: {
                        display: false,
                        min: -10,
                        max: 70
                      },
                    },
                  },
                }}
              />
            </div>

          </div>
        </div>
        <div
          className={twMerge([
            "w-full", // full width
            "h-auto relative backdrop-blur-xl",
            "[--color-frame-1-stroke:var(--color-primary)]/50",
            "[--color-frame-1-fill:var(--color-primary)]/20",
            "[--color-frame-2-stroke:var(--color-accent)]",
            "[--color-frame-2-fill:var(--color-accent)]/20",
            "[--color-frame-3-stroke:var(--color-accent)]",
            "[--color-frame-3-fill:var(--color-accent)]/20",
            "[--color-frame-4-stroke:var(--color-accent)]",
            "[--color-frame-4-fill:var(--color-accent)]/20",
            "[--color-frame-5-stroke:var(--color-accent)]",
            "[--color-frame-5-fill:var(--color-accent)]/20",
            "[--color-frame-6-stroke:var(--color-accent)]",
            "[--color-frame-6-fill:var(--color-accent)]/20",
            "[--color-frame-7-stroke:var(--color-accent)]",
            "[--color-frame-7-fill:var(--color-accent)]/20",
            "[--color-frame-8-stroke:var(--color-primary)]/23",
            "[--color-frame-8-fill:transparent]",
          ])}
        >
          <Frame
            className="drop-shadow-2xl drop-shadow-primary/50 "
            paths={JSON.parse(
              '[{"show":false,"style":{"strokeWidth":"1","stroke":"var(--color-frame-1-stroke)","fill":"var(--color-frame-1-fill)"},"path":[["M","29","30"],["L","50% - 10","30"],["L","50% + 9","0% + 11.5"],["L","100% - 105","0% + 11.5"],["L","100% - 114","31"],["L","100% - 85","12"],["L","100% - 29","12"],["L","100% - 11","30"],["L","100% - 11","100% - 47"],["L","100% - 28","100% - 28"],["L","50% + 8.5","100% - 28"],["L","50% - 7.5","100% - 12"],["L","0% + 82","100% - 12"],["L","0% + 86","100% - 27"],["L","0% + 61","100% - 12"],["L","27","100% - 12"],["L","10","100% - 29"],["L","11","47"],["L","29","30"]]},{"show":true,"style":{"strokeWidth":"1","stroke":"var(--color-frame-2-stroke)","fill":"var(--color-frame-2-fill)"},"path":[["M","0% + 40","19"],["L","50% - 42","19"],["L","50% - 46","0% + 24.5"],["L","0% + 34","0% + 24.5"],["L","0% + 40","19"]]},{"show":false,"style":{"strokeWidth":"1","stroke":"var(--color-frame-3-stroke)","fill":"var(--color-frame-3-fill)"},"path":[["M","50% - 34.5","18"],["L","50% - 25","18"],["L","50% - 31","0% + 24.5"],["L","50% - 39.5","0% + 24.5"],["L","50% - 34.5","18"]]},{"show":false,"style":{"strokeWidth":"1","stroke":"var(--color-frame-4-stroke)","fill":"var(--color-frame-4-fill)"},"path":[["M","50% - 16.5","16"],["L","50% - 4","16"],["L","50% - 12","0% + 24.5"],["L","50% - 24.5","0% + 24.5"],["L","50% - 16.5","16"]]},{"show":false,"style":{"strokeWidth":"1","stroke":"var(--color-frame-5-stroke)","fill":"var(--color-frame-5-fill)"},"path":[["M","50% + 13.5","100% - 22"],["L","50% + 25","100% - 22"],["L","50% + 17","100% - 13"],["L","50% + 4.5","100% - 12.5"],["L","50% + 13.5","100% - 22"]]},{"show":false,"style":{"strokeWidth":"1","stroke":"var(--color-frame-6-stroke)","fill":"var(--color-frame-6-fill)"},"path":[["M","50% + 30.5","100% - 22"],["L","50% + 40","100% - 22"],["L","50% + 34","100% - 14.5"],["L","50% + 24.5","100% - 14.5"],["L","50% + 30.5","100% - 21"]]},{"show":false,"style":{"strokeWidth":"1","stroke":"var(--color-frame-7-stroke)","fill":"var(--color-frame-7-fill)"},"path":[["M","50% + 45.5","100% - 22"],["L","100% - 32.5","100% - 22"],["L","100% - 38.5","100% - 16.5"],["L","50% + 40.5","100% - 16.5"],["L","50% + 45.5","100% - 22"]]},{"show":false,"style":{"strokeWidth":"1","stroke":"var(--color-frame-8-stroke)","fill":"var(--color-frame-8-fill)"},"path":[["M","35","10"],["L","50% - 4","10"],["L","50% + 8","0% + 0"],["L","100% - 97","0% + 0"],["L","100% - 109","37"],["L","100% - 83","0"],["L","100% - 22","0"],["L","100% + 0","22"],["L","100% + 0","100% - 42"],["L","100% - 35","100% - 6"],["L","50% + 1.5","100% - 6"],["L","50% - 6.5","100% + 0"],["L","0% + 73.00000000000001","100% + 0"],["L","0% + 85","100% - 32"],["L","0% + 55","100% + 0"],["L","26","100% + 0"],["L","0","100% - 27"],["L","0","43"],["L","35","10"]]}]'
            )}
          />
          <div className="relative px-12 py-14 flex flex-col">
            <div className="text-3xl text-shadow-lg text-shadow-primary font-medium mb-2">
              Skills & Tech Stack
            </div>
            <div className="opacity-70 mb-4 max-w-2xl mx-auto text-center text-lg">
              Here are the technologies and tools I use to build modern web applications. Explore by category!
            </div>
            <TabsRoot defaultValue="languages">
              <TabsList className="mb-6 flex justify-center">
                <TabsTrigger value="languages">Languages</TabsTrigger>
                <TabsTrigger value="frameworks">Frameworks</TabsTrigger>
                <TabsTrigger value="tools">Tools</TabsTrigger>
              </TabsList>
              <TabsContent value="languages">
                <div className="flex flex-wrap gap-3 justify-center">
                  <div className="w-40 py-2 border bg-(--color-primary)/30 border-(--color-primary) text-(--color-primary-foreground) flex items-center justify-center">JavaScript</div>
                  <div className="w-40 py-2 border bg-(--color-primary)/30 border-(--color-primary) text-(--color-primary-foreground) flex items-center justify-center">TypeScript</div>
                  <div className="w-40 py-2 border bg-(--color-primary)/30 border-(--color-primary) text-(--color-primary-foreground) flex items-center justify-center">HTML/CSS</div>
                  <div className="w-40 py-2 border bg-(--color-primary)/30 border-(--color-primary) text-(--color-primary-foreground) flex items-center justify-center">Python</div>
                </div>
              </TabsContent>
              <TabsContent value="frameworks">
                <div className="flex flex-wrap gap-3 justify-center">
                  <div className="w-40 py-2 border bg-(--color-primary)/30 border-(--color-primary) text-(--color-primary-foreground) flex items-center justify-center">React</div>
                  <div className="w-40 py-2 border bg-(--color-primary)/30 border-(--color-primary) text-(--color-primary-foreground) flex items-center justify-center">Next.js</div>
                  <div className="w-40 py-2 border bg-(--color-primary)/30 border-(--color-primary) text-(--color-primary-foreground) flex items-center justify-center">Node.js</div>
                  <div className="w-40 py-2 border bg-(--color-primary)/30 border-(--color-primary) text-(--color-primary-foreground) flex items-center justify-center">Express</div>
                </div>
              </TabsContent>
              <TabsContent value="tools">
                <div className="flex flex-wrap gap-3 justify-center">
                  <div className="w-40 py-2 border bg-(--color-primary)/30 border-(--color-primary) text-(--color-primary-foreground) flex items-center justify-center">Git</div>
                  <div className="w-40 py-2 border bg-(--color-primary)/30 border-(--color-primary) text-(--color-primary-foreground) flex items-center justify-center">Vercel</div>
                  <div className="w-40 py-2 border bg-(--color-primary)/30 border-(--color-primary) text-(--color-primary-foreground) flex items-center justify-center">Netlify</div>
                  <div className="w-40 py-2 border bg-(--color-primary)/30 border-(--color-primary) text-(--color-primary-foreground) flex items-center justify-center">Azure</div>
                </div>
              </TabsContent>
            </TabsRoot>
          </div>
        </div>
        <div
          className={twMerge([
            "h-95 relative backdrop-blur-xl sm:-mt-8",
            "[--color-frame-1-stroke:var(--color-primary)]/50",
            "[--color-frame-1-fill:var(--color-primary)]/20",
            "[--color-frame-2-stroke:var(--color-accent)]",
            "[--color-frame-2-fill:var(--color-accent)]/20",
            "[--color-frame-3-stroke:var(--color-accent)]",
            "[--color-frame-3-fill:var(--color-accent)]/20",
            "[--color-frame-4-stroke:var(--color-accent)]",
            "[--color-frame-4-fill:var(--color-accent)]/20",
            "[--color-frame-5-stroke:var(--color-primary)]/23",
            "[--color-frame-5-fill:transparent]",
          ])}
        >
          <Frame
            className="drop-shadow-2xl drop-shadow-primary/50"
            paths={JSON.parse(
              '[{"show":false,"style":{"strokeWidth":"1","stroke":"var(--color-frame-1-stroke)","fill":"var(--color-frame-1-fill)"},"path":[["M","32","12"],["L","50% - 94","12"],["L","50% - 77","0% + 29.5"],["L","50% + 74","0% + 29.5"],["L","50% + 91","12"],["L","100% - 30","12"],["L","100% - 11","29"],["L","100% - 11","0% + 30.37037037037037%"],["L","100% - 20","0% + 32.592592592592595%"],["L","100% - 20","100% - 32.098765432098766%"],["L","100% - 11","100% - 29.62962962962963%"],["L","100% - 11","100% - 27"],["L","100% - 28","100% - 10"],["L","50% + 80","100% - 10"],["L","50% + 84","100% - 30"],["L","50% + 70","100% - 18"],["L","50% - 75","100% - 18"],["L","50% - 82","100% - 10"],["L","26","100% - 10"],["L","9","100% - 27"],["L","9","100% - 29.62962962962963%"],["L","17","100% - 31.85185185185185%"],["L","18","0% + 32.839506172839506%"],["L","8","0% + 30.370370370370356%"],["L","8","29"],["L","21","18"],["L","42","31"],["L","32","12"]]},{"show":false,"style":{"strokeWidth":"1","stroke":"var(--color-frame-2-stroke)","fill":"var(--color-frame-2-fill)"},"path":[["M","50% - 81","15"],["L","50% - 74","15"],["L","50% - 69","0% + 19.5"],["L","50% - 76","0% + 19.5"],["L","50% - 81","15"]]},{"show":false,"style":{"strokeWidth":"1","stroke":"var(--color-frame-3-stroke)","fill":"var(--color-frame-3-fill)"},"path":[["M","50% - 68.00000000000001","15"],["L","50% - 58","15"],["L","50% - 52","0% + 21.5"],["L","50% - 61","0% + 21.5"],["L","50% - 68.00000000000001","15"]]},{"show":false,"style":{"strokeWidth":"1","stroke":"var(--color-frame-4-stroke)","fill":"var(--color-frame-4-fill)"},"path":[["M","50% - 53","15"],["L","50% + 80","15"],["L","50% + 71","0% + 23.5"],["L","50% - 43","0% + 23.5"],["L","50% - 53","15"]]},{"show":true,"style":{"strokeWidth":"1","stroke":"var(--color-frame-5-stroke)","fill":"var(--color-frame-5-fill)"},"path":[["M","26","0"],["L","50% - 93","0"],["L","50% - 83","0% + 7.5"],["L","50% + 83.99999999999994","0% + 7.5"],["L","50% + 92.99999999999994","0"],["L","100% - 25","0"],["L","100% + 0","24"],["L","100% - 0","0% + 34.074074074074076%"],["L","100% - 12","0% + 37.03703703703704%"],["L","100% - 12","100% - 33.58024691358025%"],["L","100% + 0","100% - 30.617283950617285%"],["L","100% + 0","100% - 27"],["L","100% - 25","100% + 0"],["L","50% + 71","100% + 0"],["L","50% + 92","100% - 32"],["L","50% + 64","100% - 10"],["L","50% - 65.99999999999997","100% - 11"],["L","50% - 78","100% + 0"],["L","22","100% + 0"],["L","0","100% - 22"],["L","0","100% - 34.074074074074076%"],["L","9","100% - 36.2962962962963%"],["L","9","0% + 33.82716049382717%"],["L","0","0% + 31.604938271604937%"],["L","0","19"],["L","15","10"],["L","40","41"],["L","26","0"]]}]'
            )}
          />
          <div className="relative px-12 py-14 flex flex-col items-center">
            <div className="text-2xl text-shadow-lg text-shadow-primary font-bold">
              Move Goal
            </div>
            <div className="opacity-70 mt-2">Set your daily activity goal.</div>
            <div className="flex items-center gap-5 mt-7">
              <Button shape="flat" className="py-0 px-5 text-lg">
                -
              </Button>
              <div className="flex flex-col items-center justify-center">
                <div className="text-3xl text-shadow-lg text-shadow-primary font-medium">
                  2,100
                </div>
                <div className="opacity-70 mt-1">CALORIES/DAY</div>
              </div>
              <Button shape="flat" className="py-0 px-5 text-lg">
                +
              </Button>
            </div>
            <div className="w-full h-25 mt-5">
              <Chart
                config={{
                  type: "bar",
                  data: {
                    labels: [
                      "Jan",
                      "Feb",
                      "Mar",
                      "Apr",
                      "May",
                      "Jun",
                      "Jul",
                      "Aug",
                      "Sep",
                      "Oct",
                      "Nov",
                      "Dec",
                    ],
                    datasets: [
                      {
                        label: "Html Template",
                        maxBarThickness: 12,
                        data: [
                          60, 150, 30, 200, 180, 50, 180, 120, 230, 180, 250,
                          270,
                        ],
                        backgroundColor: () => getColor("--color-primary", 0.3),
                        borderColor: () => getColor("--color-primary"),
                        borderWidth: 1,
                      },
                    ],
                  },
                  options: {
                    maintainAspectRatio: false,
                    plugins: {
                      legend: {
                        display: false,
                      },
                    },
                    scales: {
                      x: {
                        display: false,
                      },
                      y: {
                        display: false,
                      },
                    },
                  },
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden">
        <Menu />
      </div>

    </>
  );
}

export default Main;
