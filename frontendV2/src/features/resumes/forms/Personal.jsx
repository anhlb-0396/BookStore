import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Box, Grid } from "@mui/material";
import {
  AccountCircle,
  LocationOn as LocationOnIcon,
  Phone as PhoneIcon,
  Email as EmailIcon,
  Home as HomeIcon,
} from "@mui/icons-material";

import ControlledTextField from "../../../ui/inputs/ControlledTextField";
import ResumeCard from "../ResumeCard";
import TitleText from "../../../ui/sharedComponents/TitleText";
import SaveButton from "../../../ui/inputs/SaveButton";

const icons = [PhoneIcon, EmailIcon, HomeIcon];

function Personal({ information, setInformation }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {},
  });

  const onSubmit = (data) => {
    toast.success("Đã lưu thông tin cá nhân");
    setInformation({
      name: data.name,
      address: data.address,
      phoneNumber: data.contacts[0].value,
    });
  };

  return (
    <ResumeCard container sx={{ maxWidth: "md", margin: "0 auto" }}>
      <TitleText>Thông tin cá nhân</TitleText>

      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
        <Grid container sx={{ mt: "2rem" }} rowGap={3}>
          <Grid container item xs={12} md={6} justifyContent="center">
            <ControlledTextField
              id="name"
              name="name"
              label="Họ và tên"
              register={register}
              errors={errors}
              startAdornment={<AccountCircle />}
            />
          </Grid>

          <Grid container item xs={12} md={6} justifyContent="center">
            <ControlledTextField
              id="address"
              name="address"
              label="Địa chỉ"
              register={register}
              errors={errors}
              startAdornment={<LocationOnIcon />}
            />
          </Grid>

          {icons.map((Icon, index) => (
            <Grid
              container
              item
              xs={12}
              md={6}
              justifyContent="center"
              key={index}
            >
              <ControlledTextField
                id={`contacts[${index}].value`}
                name={`contacts[${index}].value`}
                label={
                  index === 0
                    ? "Số điện thoại"
                    : index === 1
                    ? "Email"
                    : "Địa chỉ nhà"
                }
                register={register}
                errors={errors}
                InputProps={{
                  startAdornment: <Icon style={{ color: "grey" }} />,
                }}
              />
            </Grid>
          ))}

          <Grid container item xs={12} md={12} justifyContent="flex-end">
            <SaveButton type="submit" />
          </Grid>
        </Grid>
      </Box>
    </ResumeCard>
  );
}

export default Personal;
