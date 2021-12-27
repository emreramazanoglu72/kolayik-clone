const createDateString = (e) => {
  const t = e.getDate(),
    n = e.getMonth();
  return (e.getFullYear() + "-" + (n + 1) + "-" + t).replace(
    /(^|\D)(\d)(?!\d)/g,
    "$10$2"
  );
};

function bytesToSize(bytes) {
  var sizes = ["Bytes", "KB", "MB", "GB", "TB"];
  if (bytes == 0) return "0 Byte";
  var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
  return Math.round(bytes / Math.pow(1024, i), 2) + " " + sizes[i];
}

export { createDateString, bytesToSize };
