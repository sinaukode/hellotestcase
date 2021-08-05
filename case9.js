select user.*,profile.*,jabatan.* from user,profile,jabatan where
user.id = profile.id and user.id = jabatan.id


