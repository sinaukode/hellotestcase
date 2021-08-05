table user
id	email	    password	profile_id
1	joko@gmail	Abc	        1


table profile
id	nama	alamat	    tanggal_lahir
1	Joko	Semarang	1993-09-01


table  jabatan

    id	jabatan	            kode_jabatan
     1	Devops	             1
    2	Software engineer	2



Table master_profile
id	Profile_id	Kode_jabatan	Masa)berlaku
1	1	        1	            2021-09-01
2	1	        2	            2022-09-01
3


select u.*, mp.masa_berlaku from master_profile mp
inner join user u on mp.profile_id = u.profile_id
inner join profile p on p.profile_id = profile.id
inner join jabatan j on mp.kode_jabatan = j.kode_jabatan
