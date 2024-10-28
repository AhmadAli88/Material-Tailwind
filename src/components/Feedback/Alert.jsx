import { Alert } from "@material-tailwind/react";

function AlertVariants() {
  return (
    <>
      <div className="flex w-full flex-col gap-2">
        <Alert>A simple filled alert for showing message.</Alert>
        <Alert variant="gradient">
          <span>A simple gradient alert for showing message.</span>
        </Alert>
        <Alert variant="outlined">
          <span>A simple outlined alert for showing message.</span>
        </Alert>
        <Alert variant="ghost">
          <span>A simple ghost alert for showing message.</span>
        </Alert>
      </div>

      <div className="flex w-full flex-col gap-2 mt-3">
        <Alert color="blue">An info alert for showing message.</Alert>
        <Alert color="red">An error alert for showing message.</Alert>
        <Alert color="green">A success alert for showing message.</Alert>
        <Alert color="amber">A warning alert for showing message.</Alert>
      </div>
    </>
  );
}
export default AlertVariants;
