"use client";

import { useRef, useState } from "react";
import styles from "./page.module.css";

import { SchedulerCalendar } from "@cubedoodl/react-simple-scheduler";
import {
  Button,
  Icon,
  Checkbox,
  LoadingSpinner,
  ProgressBar,
  Dropdown,
  Radio,
  TextField,
  Toggle,
  Tooltip,
  Accordion,
  Calendar,
  CalendarLabels,
  Card,
  Carousel,
  Dialog,
  Footer,
  Modal,
  TopNavigation,
  SideNavigation,
  Scheduler,
  Search,
  Table,
  LoginPage,
  CarouselCard,
  useTheme
} from "@tritonse/tse-constellation";
import Link from "next/link";
import { Constellation, CONSTELLATIONS } from "./constellation-data";
import { LoginPageVariant } from "@tritonse/tse-constellation/dist/templates/LoginPage";

const CALENDAR = {
  name: "Calendar",
  enabled: true
};

export default function Home() {
  const theme = useTheme();

  const tooltipButtonRef = useRef<HTMLButtonElement | null>(null);
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);

  const [calendarDate, setCalendarDate] = useState(new Date());
  const [calendars, setCalendars] = useState<SchedulerCalendar[]>([
    { name: "Calendar 1", enabled: true },
    { name: "Calendar 2", enabled: false },
    { name: "Calendar 3", enabled: false },
    { name: "Calendar 4", enabled: false },
    { name: "Calendar 5", enabled: false }
  ]);

  const [dialogOpen, setDialogOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const [loginPageVariant, setLoginPageVariant] =
    useState<LoginPageVariant>("signin");

  return (
    <>
      <TopNavigation
        navItems={[
          { label: "Home", path: "/", icon: "ic_arrowback" },
          { label: "About", path: "/", icon: "ic_help" },
          { label: "Contact", path: "/", icon: "ic_email" }
        ]}
        logoSrc="https://raw.githubusercontent.com/TritonSE/TSE-Constellation/main/public/constellation.png"
        renderLink={(path, className, children, key) => (
          <Link key={key} href={path!} className={className}>
            {children}
          </Link>
        )}
      />
      <div className={styles.root}>
        <SideNavigation
          navItems={[
            { label: "Home", path: "/", icon: "ic_arrowback" },
            { label: "About", path: "/", icon: "ic_help" },
            { label: "Contact", path: "/", icon: "ic_email" }
          ]}
          logoSrc="https://raw.githubusercontent.com/TritonSE/TSE-Constellation/main/public/constellation.png"
          renderLink={(path, className, children, key) => (
            <Link key={key} href={path!} className={className}>
              {children}
            </Link>
          )}
        />
        <div className={styles.column}>
          <h1>Atoms</h1>
          <Button>{"I'm a button"}</Button>
          <Icon name="ic_tse_lightbulb" />
          <Icon name="ic_camera" size={96} stroke="purple" fill="yellow" />
          <LoadingSpinner size={60} />
          <ProgressBar progress={75} width="80%" />

          <div />
          <h1>Molecules</h1>
          <Checkbox id="example_checkbox" label="I'm a checkbox!" />
          <Dropdown
            options={[
              { label: "Option 1" },
              { label: "Option 2" },
              { label: "Option 3" }
            ]}
          />
          <Radio id="example_radio" label="I'm a radio button!" />
          <TextField placeholder="Type something here" />
          <Toggle />
          <>
            <Button
              ref={tooltipButtonRef}
              onClick={() => {
                setIsTooltipOpen((prevIsOpen) => !prevIsOpen);
              }}
            >
              Click me to open a tooltip!
            </Button>
            <Tooltip
              contents="I'm a tooltip!"
              open={isTooltipOpen}
              onClose={() => {
                setIsTooltipOpen(false);
              }}
              anchorElement={tooltipButtonRef.current!}
            />
          </>

          <div />
          <h1>Organisms</h1>
          <Accordion
            items={[
              { header: "Item 1", content: "More information about item 1" },
              { header: "Item 2", content: "More information about item 2" },
              { header: "Item 3", content: "More information about item 3" }
            ]}
          />
          <Calendar selected={calendarDate} setSelected={setCalendarDate} />
          <CalendarLabels calendars={calendars} setCalendars={setCalendars} />
          <Card contents="I'm a card!" style={{ border: "1px dashed black" }} />
          <Carousel
            carouselCards={[
              <CarouselCard
                key={1}
                title="Item 1"
                description="First item on my amazing carousel"
              />,
              <CarouselCard
                key={2}
                title="Item 2"
                description="Second item on my amazing carousel"
              />,
              <CarouselCard
                key={3}
                title="Item 3"
                description="Third item on my amazing carousel"
              />,
              <CarouselCard
                key={4}
                title="Item 4"
                description="Fourth item on my amazing carousel"
              />
            ]}
          />

          <Button onClick={() => setDialogOpen(true)}>
            Click me to open dialog
          </Button>
          <Dialog
            variant="success"
            styleVersion="styled"
            title="I'm a dialog!"
            content="An important message for your users"
            isOpen={dialogOpen}
            onClose={() => {
              setDialogOpen(false);
            }}
          />

          <p>(Footer at bottom of page)</p>

          <Button onClick={() => setModalOpen(true)}>
            Click me to open modal
          </Button>
          <Modal
            title="I'm a modal!"
            content="An important message for your users"
            withDividers
            isOpen={modalOpen}
            onClose={() => {
              setModalOpen(false);
            }}
          />

          <p>(TopNavigation at top of page)</p>

          <p>(SideNavigation on left of page)</p>

          <Scheduler
            events={[
              {
                from: new Date(new Date().setHours(10, 0)),
                to: new Date(new Date().setHours(13, 0)),
                name: "Coding",
                repeat: 0,
                is_current: true,
                calendar: CALENDAR
              },
              {
                from: new Date(new Date().setHours(20, 0)),
                to: new Date(new Date().setHours(23, 0)),
                name: "Hiking",
                repeat: 0,
                is_current: true,
                calendar: CALENDAR
              }
            ]}
            selected={calendarDate}
            setSelected={setCalendarDate}
            editable
            onRequestAdd={() => {}}
            onRequestEdit={() => {}}
          />

          <div style={{ marginTop: 100 }} />
          <Search placeholder="Type a search term here" />
          <Table
            data={CONSTELLATIONS}
            columns={[
              {
                header: "Name",
                accessorKey: "name"
              },
              {
                header: "Abbr.",
                accessorKey: "abbreviation"
              },
              {
                header: "# of Stars",
                accessorKey: "stars"
              },
              {
                header: "Shape",
                accessorKey: "shape"
              },
              {
                header: "Brightest Star",
                accessorKey: "brightest_star"
              }
            ]}
            getRowId={(row) => (row as Constellation).name}
          />

          <div />
          <h1>Templates</h1>

          <LoginPage
            nonprofitName="Triton Software Engineering"
            nonprofitLogo={<Icon name="ic_tse_lightbulb" size={250} />}
            variant={loginPageVariant}
            onVariantChanged={setLoginPageVariant}
            onSubmit={(fields) => {
              console.log("Logged in with fields", fields);
            }}
          />

          <Link href="/error-page">
            <Button>Go to error page</Button>
          </Link>

          <Footer
            backgroundColor={theme.colors.primary_dark}
            mainColor={theme.colors.primary_light}
          />
        </div>
      </div>
    </>
  );
}
