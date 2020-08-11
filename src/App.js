import React, { useState } from "react";
import {
  Typography,
  Drawer,
  AppBar,
  Toolbar,
  IconButton,
  CssBaseline,
  Box,
  Container,
  Breadcrumbs,
  Link,
  Grid,
  Button,
  Avatar,
} from "@material-ui/core";
import "./assets/styles/styles.scss";
import { Menu, Notes, Remove, CheckBox } from "@material-ui/icons";
import { ThemeProvider, StylesProvider } from "@material-ui/core/styles";
import theme from "./thema/thema";
import clsx from "clsx";
import DrawerContent from "./components/DrawerContent";
import Book from "./assets/images/book.png";
import Exam from "./assets/images/exam.png";
import Meeting from "./assets/images/meeting.png";
import Quiz from "./assets/images/quiz.png";
import avatar1 from "./assets/images/Ellipse 96.png";
import avatar2 from "./assets/images/avatar2.png";
import avatar3 from "./assets/images/avatar3.png";
function App() {
  const [openDrawer, setOpenDrawer] = useState(true);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <StylesProvider injectFirst>
        <AppBar
          position="stinky"
          className={clsx("appBar", openDrawer && "open")}
        >
          <Toolbar className="toolbar">
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={() => setOpenDrawer((prev) => !prev)}
              className="drawerButton"
            >
              {openDrawer && <Notes color="inherit" fontSize="inherit" />}
              {!openDrawer && <Menu color="inherit" fontSize="inherit" />}
            </IconButton>
          </Toolbar>
        </AppBar>

        <Drawer variant="persistent" anchor="left" open={openDrawer}>
          <DrawerContent />
        </Drawer>
        <Container
          maxWidth="xl"
          className={clsx("containerMain", openDrawer && "open")}
        >
          <Box display="flex" alignItems="center" className="header">
            <Typography
              component="h1"
              variant="h4"
              className="activeBreadCrumb"
            >
              Progress Peserta
            </Typography>
            <Breadcrumbs aria-label="breadcrumb" className="breadCrumb">
              <Link color="inherit" href="/" className="breadLink">
                Manajemen Pelatihan
              </Link>
              <Link color="inherit" href="/" className="breadLink">
                List Pelatihan
              </Link>
              <Link color="inherit" href="/" className="breadLink">
                Detail Pelatihan
              </Link>
              <Link color="inherit" href="/" className="breadLink">
                Detail Peserta
              </Link>
              <Link color="inherit" href="/" className="breadLink">
                Progress Peserta
              </Link>
            </Breadcrumbs>
          </Box>

          <Grid
            container
            spacing={3}
            justify="center"
            alignContent="flex-start"
          >
            <Grid item xs={12} md={8} container>
              <Grid
                item
                xs={12}
                className={clsx("containerCard", "wrapperPublicSpeaking")}
              >
                <Typography className="titleSection">
                  Public Speaking King
                </Typography>
                <Typography className="subTitle">Face to Face</Typography>
                <Typography className="detail">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                  nisl a nulla lacus, augue porttitor ut turpis. Dapibus nunc
                  tempus amet, nunc neque. Est in in condimentum potenti.
                </Typography>
                <Box
                  display="flex"
                  justifyContent="space-between"
                  className="detailProgress"
                >
                  <Typography className="title">Progreess Latihan</Typography>
                  <Typography className="value">100%</Typography>
                </Box>
                <Box className="boxProgress"></Box>
              </Grid>
              <Grid
                item
                xs={12}
                container
                spacing={1}
                justify="center"
                alignContent="flex-start"
              >
                <Grid item xs={12} md={6} alignContent="flex-start">
                  <Grid
                    item
                    xs={12}
                    className={clsx("containerCard", "cardMateri")}
                  >
                    <Box display="flex" className={clsx("cardHeader")}>
                      <Box className="containerImageIcon">
                        <img src={Book} />
                      </Box>
                      <Box>
                        <Typography className="title">Materi</Typography>
                        <Typography className="subTitle">
                          Progress 3/10
                        </Typography>
                      </Box>
                    </Box>
                    <Box className="itemlistMateri">
                      <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        className="headerItem"
                      >
                        <Typography className="headerTitle">
                          Pengenalan Isi Latihan
                        </Typography>
                        <IconButton>
                          <Remove className="removeIcon" />
                        </IconButton>
                      </Box>
                      <Box
                        className="detailItem"
                        display="flex"
                        justifyContent="space-between"
                      >
                        <Box>
                          <Typography className="titleItem">
                            Pengenalan Isi Latihan
                          </Typography>
                          <Typography className="itemType" variant="caption">
                            Video
                          </Typography>
                        </Box>
                        <CheckBox className="checkBoxMateri" />
                      </Box>
                    </Box>
                    <Box className="itemlistMateri">
                      <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        className="headerItem"
                      >
                        <Typography className="headerTitle">
                          Rahasia Teknik Berbicara
                        </Typography>
                        <IconButton>
                          <Remove className="removeIcon" />
                        </IconButton>
                      </Box>
                      <Box
                        className="detailItem"
                        display="flex"
                        justifyContent="space-between"
                      >
                        <Box>
                          <Typography className="titleItem">
                            Kesalahan Umum ketika Berbicara di Depan Umum
                          </Typography>
                          <Typography className="itemType" variant="caption">
                            Video
                          </Typography>
                        </Box>
                        <CheckBox className="checkBoxMateri" />
                      </Box>
                      <Box
                        className="detailItem"
                        display="flex"
                        justifyContent="space-between"
                      >
                        <Box>
                          <Typography className="titleItem">
                            Tipe-Tipe Peserta
                          </Typography>
                          <Typography className="itemType" variant="caption">
                            PPT
                          </Typography>
                        </Box>
                        <CheckBox className="checkBoxMateri" />
                      </Box>
                      <Box
                        className="detailItem"
                        display="flex"
                        justifyContent="space-between"
                      >
                        <Box>
                          <Typography className="titleItem">
                            Kuasai Panggung dan Kendalikan Rasa Takut.
                          </Typography>
                          <Typography className="itemType" variant="caption">
                            PDF
                          </Typography>
                        </Box>
                        <CheckBox className="checkBoxMateri" />
                      </Box>
                    </Box>
                    <Box className="itemlistMateri">
                      <Box
                        display="flex"
                        justifyContent="space-between"
                        alignItems="center"
                        className="headerItem"
                      >
                        <Typography className="headerTitle">
                          Pengenalan Isi Pelatihan
                        </Typography>
                        <IconButton>
                          <Remove className="removeIcon" />
                        </IconButton>
                      </Box>
                      <Box
                        className="detailItem"
                        display="flex"
                        justifyContent="space-between"
                      >
                        <Box>
                          <Typography className="titleItem">
                            Penutupan Berkesan
                          </Typography>
                          <Typography className="itemType" variant="caption">
                            PPT
                          </Typography>
                        </Box>
                        <CheckBox className="checkBoxMateri" />
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
                <Grid item xs={12} md={6} container alignContent="flex-start">
                  <Grid
                    item
                    xs={12}
                    className={clsx("containerCard", "cardQuiz")}
                  >
                    <Box
                      display="flex"
                      className="cardHeader"
                      alignContent="flex-start"
                    >
                      <Box className="containerImageIcon">
                        <img src={Quiz} />
                      </Box>
                      <Box>
                        <Typography className="title">Quis</Typography>
                        <Typography className="subTitle">
                          Progress Quis 3/10
                        </Typography>
                      </Box>
                    </Box>
                    {[...new Array(2)].map((v) => (
                      <Box className="detailQuiz">
                        <Typography className="title">
                          Quiz 1 Public Speaking
                        </Typography>
                        <Typography className="subTitle">Kuis</Typography>
                        <Box display="flex">
                          <Typography component="div" className="answer">
                            Benar <span className="anwserCorrect">20</span>
                          </Typography>
                          <Typography component="div" className="answer">
                            Salah <span className="answerWrong">5</span>
                          </Typography>
                          <Typography component="div" className="answer">
                            Nilai <span className="value">80</span>
                          </Typography>
                        </Box>
                      </Box>
                    ))}
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    className={clsx("containerCard", "containerExam")}
                  >
                    <Box
                      display="flex"
                      className={clsx("cardHeader", "examHeader")}
                      alignContent="flex-start"
                    >
                      <Box className="containerImageIcon">
                        <img src={Exam} />
                      </Box>
                      <Box>
                        <Typography className="title">
                          Ujian Tugas Final
                        </Typography>
                        <Typography className="information" component="div">
                          Keterangan:{" "}
                          <span className="informationRed">Coba Lagi</span>
                        </Typography>
                        <Typography className="subTitle">
                          Total Attemp 1/3
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    className={clsx("containerCard", "cardMetting")}
                  >
                    <Box
                      display="flex"
                      className={clsx("cardHeader")}
                      justifyContent="space-between"
                    >
                      <Box display="flex" alignContent="flex-start">
                        <Box className="containerImageIcon">
                          <img src={Meeting} />
                        </Box>
                        <Box>
                          <Typography className="title">Tatap Muka</Typography>
                          <Typography className="subTitle">
                            Progress 3/3
                          </Typography>
                        </Box>
                      </Box>
                      <Button className="buttonJadwal">Jadwal A</Button>
                    </Box>
                    <Box
                      className="cardContent"
                      display="flex"
                      justifyContent="space-between"
                    >
                      <Box className="detailContent">
                        <Typography className="time" variant="caption">
                          Sudah selesai
                        </Typography>
                        <Typography className="title" variant="body1">
                          Gambaran umum pelatihan
                        </Typography>
                        <Typography className="date" variant="subtitle1">
                          Sabtu, 14 juni 2020 15:00 - 18:00 WIB
                        </Typography>
                        <Typography className="location" variant="subtitle1">
                          Sudirman Plasa lt3
                        </Typography>
                      </Box>
                      <CheckBox className="checkBoxContent" />
                    </Box>
                    <Box
                      className="cardContent"
                      display="flex"
                      justifyContent="space-between"
                    >
                      <Box className="detailContent">
                        <Typography className="time" variant="caption">
                          Sudah selesai
                        </Typography>
                        <Typography className="title" variant="body1">
                          Gambaran umum pelatihan
                        </Typography>
                        <Typography className="date" variant="subtitle1">
                          Sabtu, 14 juni 2020 15:00 - 18:00 WIB
                        </Typography>
                        <Typography className="location" variant="subtitle1">
                          Sudirman Plasa lt3
                        </Typography>
                      </Box>
                      <CheckBox className="checkBoxContent" />
                    </Box>
                    <Box
                      className="cardContent"
                      display="flex"
                      justifyContent="space-between"
                    >
                      <Box className="detailContent last">
                        <Typography className="time" variant="caption">
                          Sudah selesai
                        </Typography>
                        <Typography className="title" variant="body1">
                          Gambaran umum pelatihan
                        </Typography>
                        <Typography className="date" variant="subtitle1">
                          Sabtu, 14 juni 2020 15:00 - 18:00 WIB
                        </Typography>
                        <Typography className="location" variant="subtitle1">
                          Sudirman Plasa lt3
                        </Typography>
                      </Box>
                      <CheckBox className="checkBoxContent" />
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={4}>
              <Grid
                item
                xs={12}
                className={clsx("containerCard", "cardReminder")}
              >
                <Typography className="title">Reminder</Typography>
                <Box className="cardContent">
                  <Typography className="time" variant="caption">
                    Besok
                  </Typography>
                  <Typography className="title" variant="body1">
                    Mengatasi kaki Bergetar
                  </Typography>
                  <Typography className="date" variant="subtitle1">
                    Sabtu, 14 juni 2020 15:00 - 18:00 WIB
                  </Typography>
                  <Typography className="location" variant="subtitle1">
                    Gojek office Kemang Lantai 3
                  </Typography>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                className={clsx("containerCard", "cardProfile")}
              >
                <Typography className="title">Profile Peserta</Typography>
                <Box className="profileName" display="flex" alignItems="center">
                  <Avatar src={avatar2} className="containerImage" />
                  <Box className="detailName">
                    <Typography className="name">
                      Elya Stamfordbridge
                    </Typography>
                    <Typography className="status">
                      Peserta - PT Samitha Mandiri
                    </Typography>
                  </Box>
                </Box>
                <Typography className="keyProfile">No Telefon</Typography>
                <Typography className="valueProfile">+62984934859</Typography>
                <Typography className="keyProfile">Email</Typography>
                <Typography className="valueProfile">
                  Elya@samitha.co
                </Typography>
              </Grid>
              <Grid
                item
                xs={12}
                className={clsx("containerCard", "cardComment")}
              >
                <Typography className="title">Komentar</Typography>
                <Box className="cardComentar">
                  <Box
                    className="profileName"
                    display="flex"
                    alignItems="center"
                  >
                    <Avatar src={avatar3} className="containerImage" />
                    <Box className="detailName">
                      <Typography className="name">
                        DONNY Oldtrafford
                      </Typography>
                      <Typography className="status">
                        Trainer - PT Berkah Nusantara
                      </Typography>
                    </Box>
                  </Box>
                  <Typography className="commentText">
                    Feugiat sit vulputate fringilla etiam quis facilisi.
                    Pellentesque leo dictum vel, enim ac. Nunc, justo enim vel
                  </Typography>
                </Box>
                <Box className="cardComentar">
                  <Box
                    className="profileName"
                    display="flex"
                    alignItems="center"
                  >
                    <Avatar src={avatar1} className="containerImage" />
                    <Box className="detailName">
                      <Typography className="name">
                        Elya Stamfordbridge
                      </Typography>
                      <Typography className="status">
                        Peserta - PT Samitha Mandiri
                      </Typography>
                    </Box>
                  </Box>
                  <Typography className="commentText">
                    Feugiat sit vulputate fringilla etiam quis facilisi.
                    Pellentesque leo dictum vel, enim ac. Nunc, justo enim vel
                  </Typography>
                </Box>
                <Box className="cardComentar">
                  <Box
                    className="profileName"
                    display="flex"
                    alignItems="center"
                  >
                    <Avatar src={avatar1} className="containerImage" />
                    <Box className="detailName">
                      <Typography className="name">
                        Elya Stamfordbridge
                      </Typography>
                      <Typography className="status">
                        Peserta - PT Samitha Mandiri
                      </Typography>
                    </Box>
                  </Box>
                  <Typography className="commentText">
                    Feugiat sit vulputate fringilla etiam quis facilisi.
                    Pellentesque leo dictum vel, enim ac. Nunc, justo enim vel
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </StylesProvider>
    </ThemeProvider>
  );
}

export default App;
