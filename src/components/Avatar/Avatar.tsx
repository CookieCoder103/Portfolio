import Me from './../../assets/Sam.jpg'

export const Avatar = () => {
  return (
    <div className="avatar">
      <div className="w-24 rounded-full ring ring-accent ring-offset-base-100 ring-offset-2">
        <img src={Me} />
      </div>
    </div>
  );
};
